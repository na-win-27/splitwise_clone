import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Input = (props) => {
  const handleAddMember = (event) => {
    event.preventDefault();
    props.addMember({ name: newMember });
  };

  const menuList = props.allMembers.map((member) => (
    <MenuItem value={member.name}>{member.name}</MenuItem>
  ));

  const handleAddItem = (event) => {
    event.preventDefault();
    props.addItem({ item: item, member: member, price: parseInt(price) });
  };

  const classes = useStyles();
  const [newMember, editNewMember] = useState("");
  const [price, editPrice] = useState(0);
  const [member, editMember] = useState("");
  const [item, editItem] = useState("");
  return (
    <div className="flex-col">
      <h2 className="head">Add New Roomate</h2>
      <form className={classes.root}>
        <div className="flex-col">
          <TextField
            id="roomate"
            label="Name"
            variant="outlined"
            value={newMember}
            onChange={(e) => {
              editNewMember(e.target.value);
            }}
          />
          <Button
            className="btn"
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleAddMember}
          >
            ADD MEMBER
          </Button>
        </div>
      </form>
      <h2 className="head">Add New Transaction</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <div className="flex-col">
          <TextField
            id="item"
            label="Item Name"
            variant="outlined"
            value={item}
            onChange={(e) => {
              editItem(e.target.value);
            }}
          />
          <FormControl variant="outlined">
            <InputLabel variant="filled" id="person">
              Bought By
            </InputLabel>
            <Select
              labelId="person"
              id="person"
              value={member}
              onChange={(e) => {
                editMember(e.target.value);
              }}
            >
              {menuList}
            </Select>
          </FormControl>
          <TextField
            id="Price"
            label=""
            variant="outlined"
            value={price}
            onChange={(e) => {
              editPrice(e.target.value);
            }}
          />
          <Button
            className="btn  "
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleAddItem}
          >
            ADD ITEM
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allMembers: state.allMembers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (payload) => {
      dispatch({ type: "ADD_ITEM", payload: payload });
    },
    addMember: (payload) => {
      dispatch({ type: "ADD_MEMBER", payload: payload });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
