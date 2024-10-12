import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Container, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from 'react-redux';
import { addFinancialRecord } from '../../redux/financialsSlice'; 
import "./CreateFin.scss"

const CreateFinan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.financials);

  const [formData, setFormData] = useState({
    property_id: "",
    income: "",
    expenses: "",
    net_profit: "",
  });

  useEffect(() => {
    const income = parseFloat(formData.income) || 0;
    const expenses = parseFloat(formData.expenses) || 0;
    const netProfit = income - expenses;
    setFormData((prevData) => ({
      ...prevData,
      net_profit: netProfit >= 0 ? netProfit : 0,
    }));
  }, [formData.income, formData.expenses]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const financialData = {
      property_id: formData.property_id,
      income: parseFloat(formData.income),
      expenses: parseFloat(formData.expenses),
      net_profit: formData.net_profit,
    };
    dispatch(addFinancialRecord(financialData))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error("Failed to add financial record:", err);
      });
  };

  return (
    <Container className="createFinanContainer">
      <Box mb={2}>
        <Button
          variant="text"
          component={Link}
          to="/"
          startIcon={<ArrowBackIcon />}
          sx={{
            color: "#001B79",
            textTransform: "none",
            fontSize: "16px",
          }}
        >
          Back
        </Button>
      </Box>

      <Typography variant="h4" gutterBottom>
        Add Financial Record
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Property ID"
              name="property_id"
              type="text"
              fullWidth
              required
              value={formData.property_id}
              onChange={handleChange}
              placeholder="Enter the Property ID"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Income"
              name="income"
              type="number"
              fullWidth
              required
              value={formData.income}
              onChange={handleChange}
              inputProps={{ min: 0 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Expenses"
              name="expenses"
              type="number"
              fullWidth
              required
              value={formData.expenses}
              onChange={handleChange}
              inputProps={{ min: 0 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Net Profit"
              name="net_profit"
              type="number"
              fullWidth
              required
              value={formData.net_profit}
              disabled
              inputProps={{ min: 0 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                backgroundColor: "#001B79",
                color: "#fff",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#001B79",
                },
                width: "auto",
                paddingX: 3,
                paddingY: 1,
              }}
            >
              {loading ? 'Adding...' : 'Add Financial Record'}
            </Button>
            {error && (
              <Typography color="error" variant="body2" mt={1}>
                {error}
              </Typography>
            )}
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CreateFinan;
