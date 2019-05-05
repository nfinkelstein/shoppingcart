import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ShoppingIcon from "@material-ui/icons/ShoppingCart";
import { Typography } from "@material-ui/core";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class TemporaryDrawer extends React.Component {
  state = {
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <Divider />
        <List>
          <ListItem>Subtotal: {this.props.cost}</ListItem>
          {this.props.items.map((item, index) => {
            return (
              <ListItem>
                <ListItemText primary={item.title} />
                <ListItemText primary={"x" + item.qty} />
                <Button onClick={() => this.props.deleteItem(item)}>
                  Remove
                </Button>
              </ListItem>
            );
          })}
          {["Check Out"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <ShoppingIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer("right", true)}>View Cart</Button>
        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer("right", false)}
        >
          <div
            tabIndex={0}
            role="button"
            // onClick={this.toggleDrawer("right", false)}
            // onKeyDown={this.toggleDrawer("right", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
