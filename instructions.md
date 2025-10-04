# Airport Dashboard - Component Communication Assessment

### Overview
Ribbit air is live! Everything on the aircraft is working perfectly, can you believe it?! Wait, hold on, someone forgot to implement the airport display!

This is where you come in; you are tasked with implementing an airport dashboard that demonstrates React component communication and TypeScript proficiency. The application consists of a **map view on the left** displaying airports and a **data table on the right** showing airport details.

### Problem structure

- **Map View** - A panel that displays airports on a map (left-side dashboard)
- **Data Table View** - A panel that displays detailed attributes of the airports (right-side of dashboard)

The problem consists of three parts:

#### Part A: Map and Table Display
**Display airports on the map on the left-side of the dashboard. Show the same airports in the table view on the right side of the dashboard. When zooming on the map, ensure only airports visible on the map appear in the table.**

The following must be implemented to meet the requirements for part A:
- The map displays airports via markers positioned by GPS coordinates
- The table shows airport information (code, name, city, type, elevation, runways, etc.)
- Zooming in/out on map filters which airports appear in table
- Efficient filtering based on map viewport bounds

#### Part B: Selection Synchronization 
**Allow the user to select an airport on the map view or on the data table view. When an airport is selected on either the table or map view, the selection should be mirrored in the other view.**

The following must be implemented to meet the requirements for part B:
- Clicking a table row highlights the corresponding airport marker on the map
- Clicking a map marker highlights the corresponding table row
- Visual feedback for selected state in both components
- Bidirectional selection state management

#### Part C: Live Data Editing (Bonus - Only if time allows)
**Selecting an airport allows you to change the name of the airport on the table side. This change is reflected on the map side.**

The following must be implemented to meet the requirements for part C:

- Edit airport name inline in the table
- Changes immediately reflect on the map markers/tooltips
- Demonstrate real-time data synchronization between components


**Note:** Start with Part A and B. Only proceed to Part C if you have sufficient time. You should not spend more than 3 hours on this assessment. Please feel free to add any additional functions or classes to better organize your code.

### Provided Starter Code

To help you focus on component communication, we've provided an Airport type definition, a default openLayers map component, and mock data. Please feel free to modify the provided code to comply with best standards or to function with your design.

#### Type Definitions
```typescript
// Airport interface with all required properties
export interface Airport {
  id: string;
  code: string; // IATA code (e.g., "LAX", "SFO")
  name: string;
  city: string;
  country: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  elevation: number; // feet above sea level
  runways: number;
  type: 'international' | 'domestic' | 'regional' | 'private';
}

export interface MapBounds {
  north: number;
  south: number;
  east: number;
  west: number;
}
```

#### 2. OpenLayers Map Component
- Map displaying airports using mocked GPS coordinates
- Color-coded markers by airport type (international=green, domestic=blue, etc.)
- Hover tooltips showing airport names

#### 3. Mock Airport Data
- 12 US airports with realistic coordinates and data
- Mix of international, domestic, regional, and private airports
- Geographically distributed for testing zoom functionality


#### Using the Provided Map Component
The map component is ready to use and displays all airports. Your task is to:

1. **Implement the AirportList component** (table view)
2. **Add state management** to coordinate between map and table
3. **Implement bounds filtering** logic
4. **Add selection synchronization** between components
5. **Add editing functionality** (bonus)

The map component structure:
```typescript
<AirportMap
  airports={airports}
  // TODO: Add props for selection and bounds change callbacks
  // selectedAirport={selectedAirport}
  // onAirportSelect={handleAirportSelect}
  // onBoundsChange={handleBoundsChange}
/>
```

### Technical Implementation

You have freedom to choose:
- **State Management**: React Context, Redux, Zustand, or local state with props
- **Styling**: CSS modules, styled-components, Tailwind, or plain CSS
- **Component Architecture**: Your preferred React patterns and folder structure
- **Table Implementation**: Plain HTML table, data grid library, or custom component

### Testing

Please implement any type of testing that you see fit to accurately test all the implemented code.


### Success Criteria

Your solution should demonstrate:
- **Clean data flow** between sibling components sharing state
- **Proper React state management patterns** for coordinated updates
- **TypeScript proficiency** in a React context
- **Understanding of component communication** strategies
- **Testing of all components and communication**

The focus is on **how components communicate, how states are shared, and testing,** rather than visual design complexity. Show us your approach to managing coordinated updates across multiple UI components.


Good luck! 🚀