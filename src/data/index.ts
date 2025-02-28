import { CDPData } from '../types';

export const cdpData: CDPData = {
  segment: [
    {
      title: "Setting up a new source in Segment",
      content: `To set up a new source in Segment, follow these steps:

1. Log in to your Segment workspace.
2. Navigate to Sources > Add Source.
3. Browse or search for the source type you want to add.
4. Click on the source and follow the on-screen instructions
5. Configure the source settings according to your requirements
6. Once configured, Segment will provide you with the necessary credentials or code snippets
7. Implement the tracking code in your application or website
8. Verify that data is flowing correctly using the Segment debugger`
    },
    {
      title: "Creating a destination in Segment",
      content: `To create a new destination in Segment:

1. Log in to your Segment workspace
2. Navigate to Destinations > Add Destination
3. Browse or search for the destination you want to add
4. Click on the destination and select the source you want to connect it to
5. Configure the destination settings and authentication details
6. Map your events and properties to the destination's expected format
7. Enable the destination when you're ready to start sending data
8. Monitor the destination's performance in the Segment dashboard`
    },
    {
      title: "Implementing event tracking in Segment",
      content: `To implement event tracking in Segment:

1. First, make sure you've set up a Source in your Segment workspace
2. Install the Segment SDK for your platform (JavaScript, iOS, Android, etc.)
3. Initialize the SDK with your write key
4. Track events using the \`analytics.track()\` method
5. Include event name and properties in your track calls
6. Identify users with \`analytics.identify()\` to associate events with specific users
7. Use \`analytics.page()\` to track page views in web applications
8. Test your implementation using the Segment debugger to ensure events are being sent correctly`
    },
    {
      title: "Creating a tracking plan in Segment",
      content: `To create a tracking plan in Segment:

1. Navigate to Protocols > Tracking Plans in your Segment workspace
2. Click "Create Tracking Plan"
3. Name your tracking plan and add a description
4. Define your events and their properties
5. Specify property types and validation rules
6. Set required properties for each event
7. Connect your tracking plan to your sources
8. Enable validation to ensure data quality
9. Monitor compliance with your tracking plan in the Segment dashboard`
    }
  ],
  mparticle: [
    {
      title: "Creating a user profile in mParticle",
      content: `To create a user profile in mParticle:

1. Implement the mParticle SDK in your application
2. Use the \`identify\` method to create or update a user profile
3. Include a unique identifier for the user (customer ID, email, etc.)
4. Add user attributes using the \`setUserAttribute\` method
5. Set user identities using the \`setUserIdentity\` method
6. Optionally, add user tags with the \`setUserTag\` method
7. User profiles are automatically created when users are identified
8. View and manage user profiles in the mParticle dashboard under "User Activity"`
    },
    {
      title: "Setting up an input in mParticle",
      content: `To set up an input in mParticle:

1. Log in to your mParticle dashboard
2. Navigate to Setup > Inputs
3. Select the platform or service you want to connect
4. Follow the configuration steps for your specific input
5. For mobile/web SDKs, you'll need to implement the SDK in your application
6. For server-to-server APIs, you'll need to configure the API credentials
7. For platform integrations, you'll need to authenticate with the platform
8. Once configured, data will start flowing into mParticle`
    },
    {
      title: "Creating an audience in mParticle",
      content: `To create an audience in mParticle:

1. Navigate to Audiences in your mParticle dashboard
2. Click "Create Audience"
3. Name your audience and add a description
4. Define audience criteria using the audience builder
5. You can segment based on user attributes, behaviors, or device information
6. Set the calculation frequency (real-time or batch)
7. Select the outputs where you want to send this audience
8. Configure output-specific settings if needed
9. Save and activate your audience
10. Monitor audience membership in the audience dashboard`
    },
    {
      title: "Implementing event tracking in mParticle",
      content: `To implement event tracking in mParticle:

1. Install the mParticle SDK for your platform
2. Initialize the SDK with your API key
3. Track custom events using \`logEvent\` method
4. Include event name, type, and attributes
5. Track screen views using \`logScreenEvent\`
6. Track commerce events using \`logCommerceEvent\`
7. Set up data forwarding to your connected outputs
8. Use the Live Stream feature to debug your implementation
9. Verify events are being collected correctly in the mParticle dashboard`
    }
  ],
  lytics: [
    {
      title: "Building an audience seg in Lytics",
      content: `To build an audience seg in Lytics:

1. Navigate to Audiences in your Lytics dashboard
2. Click "Create Audience"
3. Define your audience criteria using the segment builder
4. You can use behavioral data, user attributes, or content affinities
5. Combine multiple conditions using AND/OR logic
6. Preview your audience to see estimated size and sample users
7. Save and name your audience
8. Use your audience for personalization, campaigns, or export to other platforms
9. Monitor audience growth and composition over time in the Audience dashboard`
    },
    {
      title: "Setting up a data collection in Lytics",
      content: `To set up data collection in Lytics:

1. Navigate to Collect > Data Sources in your Lytics dashboard
2. Click "Add Data Source"
3. Select the type of data source you want to add
4. For JavaScript tag, implement the Lytics tag on your website
5. For mobile apps, implement the Lytics mobile SDK
6. For server-side collection, use the Lytics API
7. For third-party integrations, follow the specific configuration steps
8. Configure data mapping and transformation rules if needed
9. Verify data collection using the Stream Inspector tool`
    },
    {
      title: "Creating a campaign in Lytics",
      content: `To create a campaign in Lytics:

1. Navigate to Campaigns in your Lytics dashboard
2. Click "Create Campaign"
3. Select the campaign type (web, email, mobile, etc.)
4. Choose the audience you want to target
5. Set up the campaign content and personalization
6. Configure campaign scheduling and frequency
7. Set up A/B testing if desired
8. Define success metrics and conversion goals
9. Activate the campaign
10. Monitor campaign performance in the dashboard`
    },
    {
      title: "Implementing content recommendations with Lytics",
      content: `To implement content recommendations with Lytics:

1. Set up content collection using the Lytics JavaScript tag
2. Create a content affinity model in the Lytics dashboard
3. Build an audience based on content interests
4. Navigate to Personalize > Recommendations
5. Create a new recommendation campaign
6. Select the audience and content strategy
7. Configure the recommendation display settings
8. Implement the recommendation code on your website
9. Test the recommendations using the preview tool
10. Monitor recommendation performance in the dashboard`
    }
  ],
  zeotap: [
    {
      title: "Integrating data with Zeotap",
      content: `To integrate your data with Zeotap:

1. Log in to your Zeotap CDP dashboard
2. Navigate to Connections > Data Sources
3. Click "Add New Source"
4. Select the type of data source you want to integrate
5. Configure the connection settings and authentication
6. Map your data fields to Zeotap's unified customer profile
7. Set up the data sync frequency
8. Validate the connection and data mapping
9. Activate the integration
10. Monitor data flow in the Zeotap dashboard`
    },
    {
      title: "Creating a unified customer profile in Zeotap",
      content: `To create a unified customer profile in Zeotap:

1. Set up your data sources in the Zeotap platform
2. Navigate to Identity > Identity Resolution
3. Configure your identity resolution settings
4. Define the primary identifiers for your customers
5. Set up matching rules for connecting identifiers across channels
6. Enable the identity resolution process
7. Review and refine the matching results
8. Access unified customer profiles in the Profiles section
9. Use the unified profiles for segmentation and activation`
    },
    {
      title: "Building segments in Zeotap",
      content: `To build segments in Zeotap:

1. Navigate to Segments in your Zeotap dashboard
2. Click "Create Segment"
3. Define your segment criteria using the segment builder
4. You can use customer attributes, behaviors, or predictive models
5. Combine multiple conditions using AND/OR logic
6. Preview your segment to see estimated size and sample profiles
7. Save and name your segment
8. Activate your segment to destination platforms
9. Schedule regular updates for your segment
10. Monitor segment performance and insights in the dashboard`
    },
    {
      title: "Setting up a destination in Zeotap",
      content: `To set up a destination in Zeotap:

1. Navigate to Connections > Destinations in your Zeotap dashboard
2. Click "Add Destination"
3. Select the destination platform you want to connect
4. Configure the connection settings and authentication
5. Map your Zeotap segments to the destination's audience format
6. Set up the data sync frequency
7. Validate the connection and mapping
8. Activate the destination
9. Monitor data flow to the destination
10. Analyze performance metrics for your activated segments`
    }
  ],
  comparisons: [
    {
      title: "Segment vs. mParticle: Event Tracking Approaches",
      content: `# Segment vs. mParticle: Event Tracking Approaches

## Key Differences

| Feature | Segment | mParticle |
|---------|---------|-----------|
| Method Names | Uses \`analytics.track()\` | Uses \`logEvent()\` |
| Event Structure | Event name with properties object | Event name, type, and attributes |
| User Identification | \`analytics.identify()\` | \`identify()\` with \`setUserIdentity()\` |
| Page/Screen Tracking | \`analytics.page()\` | \`logScreenEvent()\` |
| Default Properties | Automatically adds common properties | Requires manual addition of properties |
| Validation | Optional with Protocols | Built-in data planning |

## Implementation Approach
Segment focuses on a simpler API with fewer method types, while mParticle offers more specialized methods for different event types (custom, screen, commerce).

## Debugging
Segment provides a debugger in the dashboard, while mParticle offers a Live Stream feature for real-time event validation.`
    },
    {
      title: "Segment vs. Lytics: Audience Creation Comparison",
      content: `# Segment vs. Lytics: Audience Creation Comparison

## Key Differences

| Feature | Segment | Lytics |
|---------|---------|--------|
| Location | Personas feature | Audiences section |
| Creation Method | SQL-like queries or visual builder | Visual segment builder |
| Data Sources | First-party data from sources | First-party + content affinity data |
| Behavioral Targeting | Basic event-based | Advanced behavioral + content affinity |
| Machine Learning | Limited predictive capabilities | Built-in ML for predictive audiences |
| Real-time Updates | Batch processing with some real-time | Real-time audience updates |
| Testing | Limited preview capabilities | Preview with sample users |

## Use Case Strengths
Segment excels at creating audiences based on specific event sequences and user properties, while Lytics specializes in behavioral and content affinity-based audiences with predictive capabilities.

## Integration Capabilities
Segment offers more destination options for audience activation, while Lytics provides deeper personalization capabilities within its own ecosystem.`
    },
    {
      title: "mParticle vs. Zeotap: Identity Resolution Comparison",
      content: `# mParticle vs. Zeotap: Identity Resolution Comparison

## Key Differences

| Feature | mParticle | Zeotap |
|---------|-----------|--------|
| Approach | Identity mapping with IDSync | Identity Resolution with matching rules |
| User Identifiers | User identities with types | Primary identifiers with hierarchy |
| Cross-device | Device graph integration | Built-in cross-device capabilities |
| Matching Logic | Deterministic with some probabilistic | Advanced probabilistic matching |
| Third-party Data | Limited third-party enrichment | Extensive third-party data enrichment |
| Privacy Controls | Granular PII controls | Consent management integration |
| Implementation | Requires SDK implementation | Can work with server-side integration |

## Identity Types
mParticle focuses on known customer identities with some device linking, while Zeotap specializes in connecting unknown to known identities across channels.

## Data Enrichment
Zeotap offers more extensive third-party data enrichment capabilities compared to mParticle's first-party focused approach.`
    },
    {
      title: "Lytics vs. Zeotap: Data Collection Methods",
      content: `# Lytics vs. Zeotap: Data Collection Methods

## Key Differences

| Feature | Lytics | Zeotap |
|---------|--------|--------|
| Collection Methods | JavaScript tag, mobile SDK, API | Server-side API, batch uploads, integrations |
| Content Data | Strong content collection capabilities | Limited content data collection |
| Behavioral Data | Real-time behavioral tracking | Batch and real-time behavioral data |
| Implementation | Simpler tag implementation | More complex integration setup |
| Data Transformation | Limited in-platform transformation | Advanced data mapping and transformation |
| Data Sources | Fewer pre-built integrations | More extensive pre-built connectors |
| Real-time Capabilities | Strong real-time collection | Mix of batch and real-time |

## Use Case Strengths
Lytics excels at collecting content interaction data for content affinity modeling, while Zeotap specializes in integrating and unifying data from multiple sources with complex transformations.

## Implementation Complexity
Lytics offers a simpler implementation for basic tracking, while Zeotap provides more powerful tools for complex data integration scenarios.`
    }
  ],
  advanced: [
    {
      title: "Advanced Segment Destination Filtering",
      content: `# Advanced Segment Destination Filtering

To set up advanced destination filtering in Segment:

1. Navigate to your Segment workspace
2. Go to Destinations and select the destination you want to configure
3. Click on "Filters" in the destination settings
4. Create a new filter by clicking "Add Filter"
5. Choose the filter type:
   - **Event Name Filter**: Include/exclude specific events
   - **Property Value Filter**: Filter based on property values
   - **Property Presence Filter**: Filter based on property existence
   - **Event Source Filter**: Filter based on the source of events
6. Configure your filter conditions using the following operators:
   - Equals/Does not equal
   - Contains/Does not contain
   - Matches regex/Does not match regex
   - Is greater than/less than (for numeric values)
7. For complex filtering, combine multiple conditions using AND/OR logic
8. Test your filters using the Segment debugger
9. Monitor filtered events in your destination's debug mode

**Advanced Use Case**: Create a multi-condition filter that only sends purchase events with a value greater than $100 from mobile sources to your analytics destination.

**Performance Tip**: Place the most restrictive filters first to improve filtering efficiency.`
    },
    {
      title: " Advanced Server-side Kit Integration in mParticle",
      content: `#Advanced Server-side Kit Integration in mParticle

To implement a server-side kit integration with mParticle:

1. Log in to your mParticle dashboard
2. Navigate to Setup > Outputs
3. Select "Custom" as the output type
4. Choose "Server-to-Server" as the integration type
5. Configure the basic settings:
   - Name your integration
   - Set the endpoint URL for your server
   - Configure authentication (API key, OAuth, etc.)
6. Set up the event mapping:
   - Map mParticle event types to your server's expected format
   - Configure custom field mappings
   - Set up user attribute mappings
7. Implement the server-side receiver:
   - Create an endpoint on your server to receive the data
   - Parse the incoming JSON payload
   - Validate the authentication
   - Process the events according to your requirements
8. Set up error handling and retry logic
9. Implement logging for debugging purposes
10. Test the integration using mParticle's Live Stream

**Advanced Configuration**: Implement a custom data transformation function to modify events before they're sent to your server.

**Security Best Practice**: Implement IP whitelisting and payload verification to ensure only legitimate mParticle data is processed.`
    },
    {
      title: "Creating Advanced Behavioral Cohorts in Lytics",
      content: `# Creating Advanced Behavioral Cohorts in Lytics

To create advanced behavioral cohorts in Lytics:

1. Navigate to Audiences in your Lytics dashboard
2. Click "Create Audience"
3. Use the advanced segment builder with the following techniques:
   - **Sequence Detection**: Define specific event sequences (e.g., viewed product → added to cart → abandoned)
   - **Time-based Conditions**: Add time constraints between events (e.g., within 30 minutes)
   - **Frequency Filters**: Set minimum/maximum event occurrences (e.g., visited site at least 3 times)
   - **Content Affinity Scoring**: Leverage content affinity models for interest-based targeting
   - **Behavioral Scoring**: Use ML-based behavioral scores
4. Combine multiple behavioral patterns using nested AND/OR logic
5. Add exclusion criteria to refine your audience
6. Use the "Preview" feature to validate your audience definition
7. Save and activate your audience
8. Monitor audience membership and behavior over time
9. Refine your audience definition based on performance

**Advanced Use Case**: Create a cohort of users who have shown high affinity for a specific content category, visited at least twice in the past week, but haven't converted yet.

**Optimization Tip**: Use the audience overlap tool to understand how your advanced cohorts relate to other audiences.`
    },
    {
      title: "Implementing Zeotap's Advanced Identity Resolution",
      content: `# Implementing Zeotap's Advanced Identity Resolution

To implement advanced identity resolution in Zeotap:

1. Navigate to Identity > Identity Resolution in your Zeotap dashboard
2. Configure your identity resolution settings:
   - **Primary Identifiers**: Set up your hierarchy of identifiers (e.g., customer ID > email > phone)
   - **Matching Rules**: Define custom matching rules for connecting identifiers
   - **Confidence Thresholds**: Set minimum confidence scores for matches
   - **Cross-device Linking**: Enable device graph integration
3. Set up data sources with proper identity mapping:
   - Ensure each data source has properly mapped identity fields
   - Configure identity type for each identifier
   - Set up transformation rules for standardizing identity formats
4. Implement identity collection in your applications:
   - Collect authenticated and unauthenticated identifiers
   - Maintain identity context across sessions
   - Handle identity changes (e.g., login/logout events)
5. Configure privacy and consent settings:
   - Set up identity masking for sensitive identifiers
   - Configure consent-based identity resolution
6. Monitor and optimize:
   - Review identity match rates and quality metrics
   - Identify and resolve identity conflicts
   - Optimize matching rules based on performance

**Advanced Configuration**: Implement custom identity resolution rules for specific customer segments or data sources.

**Privacy Best Practice**: Implement a privacy-first approach with configurable identity retention periods and automatic PII redaction.`
    },
    {
      title: "Cross-CDP Data Integration Strategy",
      content: `# Cross-CDP Data Integration Strategy

To implement an effective cross-CDP data integration strategy:

1. **Define Primary and Secondary CDPs**:
   - Designate one CDP as your primary customer data repository
   - Define specific use cases for secondary CDPs

2. **Map Identity Spaces**:
   - Create a unified identity framework across all CDPs
   - Implement consistent identity resolution rules
   - Maintain identity sync between platforms

3. **Establish Data Flow Architecture**:
   - **Hub and Spoke Model**: Primary CDP distributes to secondary CDPs
   - **Mesh Model**: Direct integrations between CDPs for specific data
   - **Layered Model**: Different CDPs for different data types

4. **Implement Real-time Synchronization**:
   - Use webhooks for event-based updates
   - Implement server-side integrations for real-time data flow
   - Set up monitoring for sync failures

5. **Handle Data Governance**:
   - Create consistent data schemas across platforms
   - Implement centralized consent management
   - Establish data quality monitoring

6. **Optimize for Performance**:
   - Minimize redundant data transfers
   - Implement selective synchronization
   - Use batching for non-critical updates

7. **Monitor and Troubleshoot**:
   - Set up cross-platform monitoring
   - Implement data reconciliation processes
   - Create alerting for synchronization issues

**Advanced Implementation**: Create a middleware layer that standardizes data before distribution to multiple CDPs, ensuring consistent formatting and business logic.

**Governance Tip**: Implement a central "data dictionary" that maps fields across all CDPs to maintain consistency.`
    }
  ]
};