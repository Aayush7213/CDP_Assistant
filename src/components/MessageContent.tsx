import React from 'react';

interface MessageContentProps {
  content: string;
}

const MessageContent: React.FC<MessageContentProps> = ({ content }) => {
  // Check if it's a markdown table
  if (content.includes('|') && content.includes('\n')) {
    const parts = [];
    const lines = content.split('\n');
    let currentPart = '';
    let inTable = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Detect table start
      if (line.includes('|') && (i + 1 < lines.length && lines[i + 1].includes('|-'))) {
        if (currentPart) {
          parts.push(<p key={`p-${i}`} className="mb-4">{currentPart}</p>);
          currentPart = '';
        }
        
        // Extract table
        const tableLines = [];
        tableLines.push(line);
        i++;
        tableLines.push(lines[i]); // Add separator line
        
        while (i + 1 < lines.length && lines[i + 1].includes('|')) {
          i++;
          tableLines.push(lines[i]);
        }
        
        // Render table
        const headers = tableLines[0].split('|').filter(cell => cell.trim() !== '');
        const rows = tableLines.slice(2).map(line => 
          line.split('|').filter(cell => cell.trim() !== '')
        );
        
        parts.push(
          <div key={`table-${i}`} className="my-4 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  {headers.map((header, idx) => (
                    <th key={idx} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {header.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {rows.map((row, rowIdx) => (
                  <tr key={rowIdx}>
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {cell.trim()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        
        continue;
      }
      
      // Handle headings
      if (line.startsWith('# ')) {
        if (currentPart) {
          parts.push(<p key={`p-${i}`} className="mb-4">{currentPart}</p>);
          currentPart = '';
        }
        parts.push(<h1 key={`h1-${i}`} className="text-2xl font-bold mt-6 mb-4">{line.substring(2)}</h1>);
        continue;
      }
      
      if (line.startsWith('## ')) {
        if (currentPart) {
          parts.push(<p key={`p-${i}`} className="mb-4">{currentPart}</p>);
          currentPart = '';
        }
        parts.push(<h2 key={`h2-${i}`} className="text-xl font-bold mt-5 mb-3">{line.substring(3)}</h2>);
        continue;
      }
      
      // Handle numbered lists
      if (/^\d+\.\s/.test(line)) {
        if (currentPart) {
          parts.push(<p key={`p-${i}`} className="mb-4">{currentPart}</p>);
          currentPart = '';
        }
        
        const listItems = [];
        listItems.push(line);
        
        while (i + 1 < lines.length && /^\d+\.\s/.test(lines[i + 1])) {
          i++;
          listItems.push(lines[i]);
        }
        
        parts.push(
          <ol key={`ol-${i}`} className="list-decimal pl-5 my-4">
            {listItems.map((item, idx) => {
              const content = item.replace(/^\d+\.\s/, '');
              return <li key={idx} className="my-1">{content}</li>;
            })}
          </ol>
        );
        
        continue;
      }
      
      // Handle bullet lists
      if (line.startsWith('- ')) {
        if (currentPart) {
          parts.push(<p key={`p-${i}`} className="mb-4">{currentPart}</p>);
          currentPart = '';
        }
        
        const listItems = [];
        listItems.push(line);
        
        while (i + 1 < lines.length && lines[i + 1].startsWith('- ')) {
          i++;
          listItems.push(lines[i]);
        }
        
        parts.push(
          <ul key={`ul-${i}`} className="list-disc pl-5 my-4">
            {listItems.map((item, idx) => {
              const content = item.substring(2);
              return <li key={idx} className="my-1">{content}</li>;
            })}
          </ul>
        );
        
        continue;
      }
      
      // Handle empty lines as paragraph breaks
      if (line.trim() === '') {
        if (currentPart) {
          parts.push(<p key={`p-${i}`} className="mb-4">{currentPart}</p>);
          currentPart = '';
        }
        continue;
      }
      
      // Add to current paragraph
      if (currentPart) {
        currentPart += ' ' + line;
      } else {
        currentPart = line;
      }
    }
    
    // Add any remaining content
    if (currentPart) {
      parts.push(<p key="final" className="mb-4">{currentPart}</p>);
    }
    
    return <div className="space-y-2">{parts}</div>;
  }
  
  // For non-complex content, split by sentences and add line breaks
  return (
    <p className="mb-4">
      {content.split('\n').map((paragraph, idx) => (
        <React.Fragment key={idx}>
          {paragraph}
          {idx < content.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  );
};

export default MessageContent;