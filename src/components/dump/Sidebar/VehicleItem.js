import React from 'react';
import Checkbox from "material-ui/Checkbox";
import IconButton from 'material-ui/IconButton';
import { ListItem, ListItemText } from "material-ui/List";
import { Input } from 'material-ui-icons';

const VehicleItem = props => {
  const {
    hooverVehicle, vehicleKey, vehicle,
    onMouseEnter, onMouseLeave, onCheck, onOpenPanel, unCheckAll
  } = props;
  return (
    <ListItem
      button
      style={{ padding: 0, paddingLeft: 25 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Checkbox disabled={unCheckAll} tabIndex={-1} onClick={onCheck} disableRipple />
      <ListItemText key={`ListItemText${vehicle.id}`} inset primary={vehicle.id} />
      {hooverVehicle === vehicleKey && (
        <div>
          <IconButton
            aria-label="Open Panel"
            style={{ marginRight: '40px' }}
            onClick={onOpenPanel}
          >
            <Input />
          </IconButton>
        </div>
      )}
    </ListItem>
  );
};

export default VehicleItem;