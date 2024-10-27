// import React from "react";
// import Search from "./Search";
// import Users from "./Users";




// function Left() {
//   return (
//     <div className="w-[30%] bg-[#e0f2ff] text-black font-dm-sans ">
//       <h1 className="font-bold text-2xl p-6 px-11">Suraksha  Connect</h1>
//       {/* <div className="w-full   bg-black text-gray-300"> */}
//       {/* <Search /> */}
//       <div
//         className=" flex-1  overflow-y-auto"
//         style={{ minHeight: "calc(84vh - 10vh)" }}
//       >
//         <Users />
//       </div>

//     </div>

//   );
// }

// export default Left;


// src/home/Leftpart/Left.jsx

import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Scrollbar } from "../../components/scrollbar"; // Ensure this component exists
import Users from "./Users"; // Ensure this is imported correctly
import { varAlpha } from '../../theme/styles.js';

const Left = () => {
  const theme = useTheme(); // Get the theme object

  // Define styles using CSS variables, similar to the provided structure
  const styles = {
    '--layout-left-bg': theme.palette.common.white, // Accessing palette directly
    '--layout-left-border-color': varAlpha(theme.palette.grey[500], 0.08), // Correcting grey access
    '--layout-left-item-color': theme.palette.text.secondary,
    '--layout-left-item-active-color': theme.palette.primary.main,
    '--layout-left-width': '300px', // Sidebar width similar to your layout
    '--layout-content-padding-top': theme.spacing(4), // Adjusted top padding
    '--layout-content-padding-bottom': theme.spacing(4), // Adjusted bottom padding
    '--layout-content-padding-x': theme.spacing(4), // Adjusted horizontal padding
    '--layout-text-size': '0.875rem', // Smaller text size (14px equivalent)
  };

  return (
    <Box
      sx={{
        backgroundColor: 'var(--layout-left-bg)',
        borderColor: 'var(--layout-left-border-color)',
        paddingTop: 'var(--layout-content-padding-top)', // Using theme-based spacing
        paddingBottom: 'var(--layout-content-padding-bottom)', // Bottom padding from theme
        paddingLeft: 'var(--layout-content-padding-x)', // Horizontal padding from theme
        paddingRight: 'var(--layout-content-padding-x)', // Horizontal padding from theme
        height: '100vh',
        fontSize: 'var(--layout-text-size)', // Applying the smaller text size globally
        ...styles, // Applying the CSS variables directly
      }}
    >
      <h1 className="font-bold text-2xl mb-4" style={{
        color: theme.palette.primary.main, // Primary color for prominence
        textAlign: 'center', // Center align the title
        textTransform: 'uppercase', // Uppercase for style
        letterSpacing: '1px', // Spacing between letters
        whiteSpace: 'nowrap', // Prevent line break
        overflow: 'hidden', // Hide overflow if necessary
        textOverflow: 'ellipsis', // Add ellipsis if text is too long
      }}>
        Chatify
      </h1>
      <Box
        component="div"
        sx={{
          color: 'var(--layout-left-item-color)',
          fontSize: 'var(--layout-text-size)', // Smaller font size for items
        }}
      >
        <Users />
      </Box>
      {/* Add more components or items as needed */}
    </Box>
  );
};

export default Left;






