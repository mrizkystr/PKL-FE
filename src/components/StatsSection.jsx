import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const StatsSection = ({ stats }) => {
  const statCards = [
    { title: "Total Sales Codes", value: stats.totalSalesCodes, color: "primary" },
    { title: "Total Orders", value: stats.totalOrders, color: "secondary" },
    { title: "Completed Orders", value: stats.completedOrders, color: "success" },
    { title: "Pending Orders", value: stats.pendingOrders, color: "error" },
  ];

  return (
    <Grid container spacing={3} justifyContent="center">
      {statCards.map((stat, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={{ border: `2px solid ${stat.color}` }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {stat.title}
              </Typography>
              <Typography variant="h4">{stat.value}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsSection;
