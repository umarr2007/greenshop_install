import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import FormLogin from './form-login';
import FormRegister from './form-register';

BasicTabs.propTypes  = {
  setOpen2: PropTypes.func.isRequired
}
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
    role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({setOpen2}) {
  const [valueTab, setValueTab] = useState(0);
  

  const handleChange = (event, newValue) => {
    setValueTab(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={valueTab} onChange={handleChange} style={{display: 'flex', justifyContent: 'center', width:'200px', margin: 'auto'}} aria-label="basic tabs example" > 
          <Tab label="Login" {...a11yProps(0)}/>
          <Tab label="Register" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={valueTab} index={0}>
        <FormLogin setOpen2={setOpen2}/>
      </CustomTabPanel>
      <CustomTabPanel value={valueTab} index={1}>
        <FormRegister setOpen2={setOpen2}/>
      </CustomTabPanel>
    </Box>
  );
}
