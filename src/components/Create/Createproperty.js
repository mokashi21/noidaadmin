import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Container,
  Typography,
  Box,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from 'react-redux';
import { addProperty } from '../../redux/propertiesSlice';
import "./Create.scss"

const CreateProperty = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.properties);

  const [formData, setFormData] = useState({
    owner_name: "",
    property_name: "",
    total_units: "",
    filled_units: "",
    vacant_units: "",
    occupancy_rate: "",
    last_maintenance_date: "",
  });
  useEffect(() => {
    const total = parseInt(formData.total_units, 10) || 0;
    const filled = parseInt(formData.filled_units, 10) || 0;
    const vacant = total - filled;
    setFormData((prevData) => ({
      ...prevData,
      vacant_units: vacant >= 0 ? vacant : 0,
    }));
  }, [formData.total_units, formData.filled_units]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "occupancy_rate" && value && !value.endsWith("%")) {
      setFormData({ ...formData, [name]: `${value}%` });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const propertyData = {
      owner_name: formData.owner_name,
      property_name: formData.property_name,
      total_units: parseInt(formData.total_units, 10),
      filled_units: parseInt(formData.filled_units, 10),
      occupancy_rate: formData.occupancy_rate,
      last_maintenance_date: formData.last_maintenance_date,
    };
    dispatch(addProperty(propertyData))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error("Failed to add property:", err);
      });
  };

  return (
    <Container className="createPropertyContainer">
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
        Add New Property
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Owner Name"
              name="owner_name"
              fullWidth
              required
              value={formData.owner_name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Property Name"
              name="property_name"
              fullWidth
              required
              value={formData.property_name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Total Units"
              name="total_units"
              type="number"
              fullWidth
              required
              value={formData.total_units}
              onChange={handleChange}
              inputProps={{ min: 0 }}
            />
          </Grid>

          {/* Filled Units */}
          <Grid item xs={12} sm={4}>
            <TextField
              label="Filled Units"
              name="filled_units"
              type="number"
              fullWidth
              required
              value={formData.filled_units}
              onChange={handleChange}
              inputProps={{ min: 0 }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Vacant Units"
              name="vacant_units"
              type="number"
              fullWidth
              required
              value={formData.vacant_units}
              disabled 
              inputProps={{ min: 0 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Occupancy Rate"
              name="occupancy_rate"
              fullWidth
              required
              value={formData.occupancy_rate}
              onChange={handleChange}
              placeholder="e.g., 85%"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Maintenance Date"
              name="last_maintenance_date"
              type="date"
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
              value={formData.last_maintenance_date}
              onChange={handleChange}
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
              {loading ? 'Adding...' : 'Add Property'}
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

export default CreateProperty;
