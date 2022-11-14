import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import usePagination from '../../core/Pagination/Pagination';
import { default as rows } from '../../constant/Clients.json';
import Sampath from '../../images/sampath.jpeg';
import Boc from '../../images/boc.jpeg';

export default function CustomPaginationActionsTable() {
    const [page, setPage] = React.useState(1);
    const PER_PAGE = 10;

    const count = Math.ceil(rows.length / PER_PAGE);
    const _DATA = usePagination(rows, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (page) * PER_PAGE - rows.length) : 0;

    return (
        <TableContainer component={Paper}>
            <Table
                responsive
                aria-label="custom pagination table"
            >
                <TableHead className="table-header">
                    <TableRow>
                        <TableCell>Client Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Created Data</TableCell>
                        <TableCell>Renewal Data</TableCell>
                        <TableCell>Categories</TableCell>
                        <TableCell>Products</TableCell>
                        <TableCell>Closed Tickets</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {_DATA.currentData().map((row, index) => (
                        <TableRow
                            key={index}
                        >
                            <TableCell className="font-color client-name">
                                <img src={row.logo === "sampath" ? Sampath : Boc} alt="logo" />
                                {row.name}
                            </TableCell>
                            <TableCell className="font-color">{row.email}</TableCell>
                            <TableCell className="font-color">{row.createdDate}</TableCell>
                            <TableCell className="font-color">{row.renewalDate}</TableCell>
                            <TableCell className="font-color">{row.categories}</TableCell>
                            <TableCell className="font-color">{row.products}</TableCell>
                            <TableCell className="font-color">{row.closeTickets}</TableCell>
                            <TableCell>
                                <span
                                    className={"badge badge-pill client-status"}
                                >
                                    Active
                                </span>
                            </TableCell>
                            <TableCell className='client-action'>
                                <EditIcon className='client-action-edit-icon' />
                                <DeleteIcon className='client-action-delete-icon' />
                            </TableCell>
                        </TableRow>
                    ))}

                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={9} />
                        </TableRow>
                    )}
                </TableBody>

                <TableFooter>
                    <TableRow>
                        <Box sx={{ flexShrink: 0, ml: 1.5, py: 2 }}>
                            <Stack spacing={2}>
                                <Pagination
                                    page={page}
                                    count={count}
                                    variant="outlined"
                                    shape="rounded"
                                    onChange={handleChange}
                                />
                            </Stack>
                        </Box>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer >
    );
}