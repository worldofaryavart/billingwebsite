import React, { useState } from "react";
import {
  Paper,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Widget({
  children,
  title,
  noBodyPadding,
  bodyClass,
  disableWidgetMenu,
  header,
  ...props
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMoreMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex min-h-full">
      <Paper className="flex flex-col flex-grow overflow-hidden shadow-lg" elevation={3}>
        <div className="flex justify-between items-center p-6 pb-2">
          {header ? (
            header
          ) : (
            <>
              <Typography variant="h5" color="textSecondary" className="text-gray-600">
                {title}
              </Typography>
              {!disableWidgetMenu && (
                <IconButton
                  aria-label="more"
                  aria-controls="widget-menu"
                  aria-haspopup="true"
                  onClick={handleMenuOpen}
                  className="text-gray-400 hover:bg-blue-500 hover:text-blue-100"
                >
                  <MoreVertIcon />
                </IconButton>
              )}
            </>
          )}
        </div>
        <div
          className={`px-6 pb-6 ${noBodyPadding ? "p-0" : ""} ${
            bodyClass || ""
          }`}
        >
          {children}
        </div>
      </Paper>
      <Menu
        id="widget-menu"
        anchorEl={anchorEl}
        keepMounted
        open={isMoreMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <Typography>Edit</Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Typography>Copy</Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Typography>Delete</Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Typography>Print</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}