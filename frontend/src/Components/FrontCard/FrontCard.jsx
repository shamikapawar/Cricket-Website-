// import React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import { CardActionArea, Box } from "@mui/material";

// const FrontCard = () => {
//   return (
//     <Box sx={{ width: 700, height: 170 }}>
//       <Card
//         style={{
//           boxShadow:
//             " rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
//         }}
//       >
//         <div>
//           <CardContent
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               height: "100%",
//             }}
//           >
//             <Typography
//               gutterBottom
//               variant="h3"
//               component="div"
//               alignContent={"center"}
//               style={{ fontFamily: "DM Sans,sans-serif", fontWeight: "700" }}
//             >
//               Our Blogs
//             </Typography>
//             <Typography
//               variant="body2"
//               alignContent={"center"}
//               style={{
//                 fontSize: "20px",
//                 fontFamily: "DM Sans,sans-serif",
//                 fontWeight: "500",
//               }}
//             >
//               "Bowled Over by Cricket Fever! Discover the Thrills and Spills of
//               the
//             </Typography>
//             <Typography
//               variant="body2"
//               alignContent={"center"}
//               style={{
//                 fontSize: "20px",
//                 fontFamily: "DM Sans,sans-serif",
//                 fontWeight: "500",
//               }}
//             >
//               {" "}
//               Gentleman’s Game."
//             </Typography>
//           </CardContent>
//         </div>
//       </Card>
//     </Box>
//   );
// };

// export default FrontCard;


















// import React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import { Box } from "@mui/material";

// const FrontCard = () => {
//   return (
//     <Box sx={{ width: { xs: 300, sm: 500, md: 700 }, height: 170 }}>
//       <Card
//         style={{
//           boxShadow:
//             " rgba(20, 20, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
//         }}
//       >
//         <div>
//           <CardContent
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               height: "100%",
//             }}
//           >
//             <Typography
//               gutterBottom
//               variant="h3"
//               component="div"
//               alignContent={"center"}
//               style={{ fontFamily: "DM Sans,sans-serif", fontWeight: "700" }}
//             >
//               Our Blogs
//             </Typography>
//             <Typography
//               variant="body2"
//               alignContent={"center"}
//               style={{
//                 fontSize: "20px",
//                 fontFamily: "DM Sans,sans-serif",
//                 fontWeight: "500",
//               }}
//             >
//               "Bowled Over by Cricket Fever! Discover the Thrills and Spills of
//               the
//             </Typography>
//             <Typography
//               variant="body2"
//               alignContent={"center"}
//               style={{
//                 fontSize: "20px",
//                 fontFamily: "DM Sans,sans-serif",
//                 fontWeight: "500",
//               }}
//             >
//               Gentleman’s Game."
//             </Typography>
//           </CardContent>
//         </div>
//       </Card>
//     </Box>
//   );
// };

// export default FrontCard;



import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";



const FrontCard = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: "26px",
        zIndex: 2,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent
        style={{
          color: "white", // White text color for better contrast
        }}
      >
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          alignContent={"center"}
          style={{ fontFamily: "DM Sans,sans-serif", fontWeight: "700", textAlign:"center"
           }}
        >
          Our Blogs
        </Typography>
        <Typography
          variant="body2"
          alignContent={"center"}
          style={{
            fontSize: "20px",
            fontFamily: "DM Sans,sans-serif",
            fontWeight: "500",
          }}
        >
          "Bowled Over by Cricket Fever! Discover the Thrills and Spills of
          the
        </Typography>
        <Typography
          variant="body2"
          alignContent={"center"}
          style={{
            fontSize: "20px",
            fontFamily: "DM Sans,sans-serif",
            fontWeight: "500",
            textAlign:"center"
          }}
        >
          Gentleman’s Game."
        </Typography>
        <Typography
        variant="body2"
        alignContent={"center"}
        style={{
          fontSize:"20px",
          fontFamily: "DM Sans,sans-serif",
          fontWeight: "500",
          textAlign:"center",
          padding:"7px",
          color:"black",
          backgroundColor:"white",
          width:"40%",
          margin:"auto",
          borderRadius:"8px"
        }}
        >
          WicketWatchers
        </Typography>
      </CardContent>
    </Box>
  );
};

export default FrontCard;
