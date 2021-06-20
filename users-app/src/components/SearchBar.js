import React from "react";
import { Paper, TextField } from "@material-ui/core"
class SearchBar extends React.Component {

    handleChange = (event) => {
        console.log(event.target.value);
    }

    handleSubmit = (event) => {
                
    }

    render() {
        return (
            <Paper elevation={6} style={ {padding: "25px"}} >
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search ..." onChange={this.handleChange} />
                </form>
            </Paper>
        )
    }

}
export default SearchBar;
