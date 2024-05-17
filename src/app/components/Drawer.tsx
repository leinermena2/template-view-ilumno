import { useState } from 'react';
import { Drawer as MuiDrawer, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

interface Option {
  label: string;
  icon: SvgIconComponent;
  onClick: () => void;
}

interface DrawerProps {
  isOpen?: boolean;
  onClose?: () => void;
  options: Option[];
  static?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right'; 
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, options, static: isStatic, position = 'left' }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [showLabels, setShowLabels] = useState<boolean>(true);

  const handleListItemClick = (index: number, onClick: () => void) => {
    setSelectedIndex(index);
    onClick();
  };

  const toggleShowLabels = () => {
    setShowLabels(!showLabels);
  };

  return (
    <MuiDrawer
      anchor={position}
      open={!isStatic ? isOpen : true}
      onClose={!isStatic ? onClose : undefined}
      variant={isStatic ? "permanent" : "temporary"}
      style={{
        width: isStatic ? '240px' : undefined,
        flexShrink: isStatic ? 0 : undefined,
        zIndex: isStatic ? 'auto' : undefined,
      }}
    >
      <List>
        {options.map((option, index) => (
          <ListItem
            key={index}
            button
            selected={selectedIndex === index}
            onClick={() => handleListItemClick(index, option.onClick)}
          >
            <ListItemIcon>
              <option.icon />
            </ListItemIcon>
            {showLabels && <ListItemText primary={option.label} />}
          </ListItem>
        ))}
      </List>
      {!isStatic && (
        <Button onClick={toggleShowLabels}>{showLabels ? 'Hide Labels' : 'Show Labels'}</Button>
      )}
    </MuiDrawer>
  );
};

export default Drawer;
