import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';

/**
 * Reusable dropdown search component
 * @param {string} label - Label for the input
 * @param {string} value - Current input value
 * @param {function} onChange - Input change handler
 * @param {function} onSelect - Called with selected option
 * @param {function} onClear - Called when clear is clicked
 * @param {array} options - Array of string options to show in dropdown
 * @param {boolean} showDropdown - Whether to show dropdown
 * @param {function} onFocus - Input focus handler
 */
const DropdownSearch = ({
  label,
  value,
  onChange,
  onSelect,
  onClear,
  options = [],
  showDropdown = false,
  onFocus
}) => (
  <div style={{ position: 'relative', width: 300 }}>
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      InputProps={{
        endAdornment: (
          value && (
            <Button onClick={onClear} size="small" color="secondary">
              Clear
            </Button>
          )
        )
      }}
    />
    {showDropdown && options.length > 0 && (
      <Paper sx={{
        position: 'absolute',
        width: '100%',
        zIndex: 2,
        maxHeight: 200,
        overflowY: 'auto',
        mt: 1
      }}>
        <List>
          {options.map(option => (
            <ListItem key={option} disablePadding>
              <ListItemButton onClick={() => onSelect(option)}>
                {option}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    )}
  </div>
);

export default DropdownSearch;
