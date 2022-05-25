import { Button, CssBaseline, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChangePassword from './auth/ChangePassword';
export default function DashBoard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logout Clicked");
    navigate("/login");
  };
  return (
    <>
      <CssBaseline />
      <Grid container>
        <Grid
          item
          sm={6}
          sx={{ backgroundColor: "gray", p: 5, color: "white" }}
        >
          <h1>Dashboard</h1>
          <Typography variant="h5">Email: sonam@gmail.com</Typography>
          <Typography variant="h6">Name: Sonam</Typography>
          <Button
            variant="contained"
            color="warning"
            size="large"
            onClick={handleLogout}
            sx={{ mt: 8 }}
          >
            Logout
          </Button>
        </Grid>
        <Grid item sm={6}>
          <ChangePassword />
        </Grid>
      </Grid>
    </>
  );
}
