import * as React from "react";
import { Button, Stack } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';
import ClientManagementTable from "./ClientManagementTable";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from "@mui/material/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import { default as rows } from '../../constant/Clients.json';
import './ClientManagement.css'

const useStyles = makeStyles(() => ({
    noBorder: {
        border: "none",
    },
}));

function ClientManagement() {

    const classes = useStyles();

    return (
        <div>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <div className="client-filter">
                    <Button className="filter-button">
                        <FilterListIcon />
                        <div>FILTER</div>
                    </Button>

                    <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            classes: { notchedOutline: classes.noBorder }
                        }}
                        className="search-field"
                        placeholder="Search users by name, id"
                    />
                </div>

                <Button className="add-client-button">
                    Add New Client
                </Button>
            </Stack>

            <div className="clients-count">{rows.length} Clients</div>

            <ClientManagementTable />
        </div>
    );
}

export default ClientManagement;
