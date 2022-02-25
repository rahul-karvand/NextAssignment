import React from "react";
import Head from 'next/head'
import {
    Card, CardHeader, CardTitle, CardBody, Label, Input, Row, Col, Table, TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink, CardText, Button
} from "reactstrap";
import { Radio } from "react-feather";
import Image from 'next/image';
import Avatar from 'react-avatar';
import { Navigation } from 'react-feather';
import Link from 'next/link'
import Second from "./Second";

const Data = () => {
    return (
        <Table striped className='mt-4 '>
            <thead className=" bg-dark text-white">
                <tr>
                    <th>
                        Status
                    </th>
                    <th>
                        Class Name
                    </th>
                    <th>
                        Faculty
                    </th>
                    <th>
                        Caregory
                    </th>
                    <th>
                        Time
                    </th>
                    <th>
                        Rating
                    </th>
                    <th>
                        Type
                    </th>
                    <th>
                        Language
                    </th>
                    <th>
                        Studio
                    </th>
                </tr>
            </thead>
            <tbody>
                <Link href="/MyComponents/Second">
                    <tr className=" cursor-pointer">

                        <th scope="row">
                            <Radio size={30} color="red" />
                        </th>
                        <td className="flex space-x-2">

                            <Image src="/maxresdefault.jpg" height={50} width={120}></Image>
                            <div className="flex flex-col">

                                <h6>ESE 2022 Prelims Paper-1 | Maha Marathon |Complete</h6>
                                <span>Free Live classes</span>
                            </div>
                        </td>
                        <td>
                            Suraj Gopi
                        </td>
                        <td>
                            ESE & Gate
                        </td>
                        <td>
                            11:00 AM
                        </td>
                        <td>
                            0
                        </td>
                        <td>
                            <Navigation size={20} />
                        </td>
                        <td>
                            EN
                        </td>
                        <td>
                            <Avatar size="40" name='Abhinav' round={true} className="mr-1" /> Abhinav
                        </td>

                    </tr>
                </Link>
                <Link href="/MyComponents/Second">
                    <tr>

                        <th scope="row">
                            <Radio size={30} color="red" />
                        </th>
                        <td className="flex space-x-2">

                            <Image src="/maxresdefault.jpg" height={50} width={120}></Image>
                            <div className="flex flex-col">

                                <h6>ESE 2022 Prelims Paper-1 | Maha Marathon |Complete</h6>
                                <span>Free Live classes</span>
                            </div>
                        </td>
                        <td>
                            Suraj Gopi
                        </td>
                        <td>
                            ESE & Gate
                        </td>
                        <td>
                            11:00 AM
                        </td>
                        <td>
                            0
                        </td>
                        <td>
                            <Navigation size={20} />
                        </td>
                        <td>
                            EN
                        </td>
                        <td>
                            <Avatar size="40" name='Abhinav' round={true} className="mr-1" /> Abhinav
                        </td>

                    </tr>
                </Link>

                <Link href="/MyComponents/Second">
                    <tr>

                        <th scope="row">
                            <Radio size={30} color="red" />
                        </th>
                        <td className="flex space-x-2">

                            <Image src="/maxresdefault.jpg" height={50} width={120}></Image>
                            <div className="flex flex-col">

                                <h6>ESE 2022 Prelims Paper-1 | Maha Marathon |Complete</h6>
                                <span>Free Live classes</span>
                            </div>
                        </td>
                        <td>
                            Suraj Gopi
                        </td>
                        <td>
                            ESE & Gate
                        </td>
                        <td>
                            11:00 AM
                        </td>
                        <td>
                            0
                        </td>
                        <td>
                            <Navigation size={20} />
                        </td>
                        <td>
                            EN
                        </td>
                        <td>
                            <Avatar size="40" name='Abhinav' round={true} className="mr-1" /> Abhinav
                        </td>

                    </tr>
                </Link>
                <Link href="/MyComponents/Second">
                    <tr>

                        <th scope="row">
                            <Radio size={30} color="red" />
                        </th>
                        <td className="flex space-x-2">

                            <Image src="/maxresdefault.jpg" height={50} width={120}></Image>
                            <div className="flex flex-col">

                                <h6>ESE 2022 Prelims Paper-1 | Maha Marathon |Complete</h6>
                                <span>Free Live classes</span>
                            </div>
                        </td>
                        <td>
                            Suraj Gopi
                        </td>
                        <td>
                            ESE & Gate
                        </td>
                        <td>
                            11:00 AM
                        </td>
                        <td>
                            0
                        </td>
                        <td>
                            <Navigation size={20} />
                        </td>
                        <td>
                            EN
                        </td>
                        <td>
                            <Avatar size="40" name='Abhinav' round={true} className="mr-1" /> Abhinav
                        </td>

                    </tr>
                </Link>

            </tbody>
        </Table>
    )

}

export default Data;