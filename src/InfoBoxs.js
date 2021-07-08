import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Infobox.css";
function InfoBoxs({ title, cases, active, isRed, deaths, total, ...props }) {
  return (
    <Card onClick={props.onClick} className={`InfoBox ${active && 'infoBox--selected'} ${isRed && 'InfoBox--red'} ${deaths && 'InfoBox--red'}`}>
      <CardContent >
        <Typography className="InfoBox__title" color="textSecondary">
          {title}
        </Typography>
        <h2 className={`InfoBox__cases ${!isRed && "InfoBox__cases--green"}`}>{cases}</h2>
        <Typography className="InfoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBoxs;
// import React from "react";
// import { Card, CardContent, Typography } from "@material-ui/core";
// import "./InfoBox.css";

// function InfoBox({ title, cases, total}) {
//   return (
//     <Card
//       className={"infoBox"}
//     >
//       <CardContent>
//         <Typography color="textSecondary" gutterBottom>
//           {title}
//         </Typography>
//         <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
//           {cases}
//         </h2>

//         <Typography className="infoBox__total" color="textSecondary">
//           {total} Total
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }

// export default InfoBox;

