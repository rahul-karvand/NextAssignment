import React from 'react'

import { useState } from 'react'
import {
    Card, CardHeader, CardTitle, CardBody, Label, Input, Row, Col, Table, TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink, CardText, Button
} from "reactstrap"
import classnames from "classnames";
import { Radio } from "react-feather"
import Image from 'next/image';
import Avatar from 'react-avatar';
import { Navigation } from 'react-feather';
import Data from "./Table"
import Second from './Second';

const First = () => {

    const [openTab, setOpenTab] = useState(3);
    const [activeTab, setActiveTab] = useState('1');
    const [activeLiveTab, setActiveLiveTab] = useState('1');

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }
    const toggleTwo = (tab) => {
        if (activeLiveTab !== tab) {
            setActiveLiveTab(tab);
        }
    }
    return (
        <div>


            <div className="w-full  pt-2 px-4">
                <div className="flex items-center justify-between">
                    <div className='flex flex-col'>
                        <h1 className="font-bold text-xl">All Live Classes</h1>
                        <span className='text-base'>16th Februrary 2022</span>
                    </div>
                    <div className='flex space-x-2'>
                        <select className="px-3 py-2 bg-transparent flex-1 focus:outline-none border-gray-300 border">
                            <option>Exam Category</option>
                            <option>Exam 1</option>
                            <option>Exam 2</option>
                            <option>Exam 3</option>
                        </select>
                        <select className="px-3 py-2 bg-transparent flex-1 focus:outline-none border-gray-300 border">
                            <option>Faculty Name</option>
                            <option>Faculty 1</option>
                            <option>Faculty 2</option>
                            <option>Faculty 3</option>
                        </select>
                        <select className="px-3 py-2 bg-transparent flex-1 focus:outline-none border-gray-300 border">
                            <option>Cost Filter</option>
                            <option>Cost1</option>
                            <option>Cost 2</option>
                            <option>Cost 3</option>
                        </select>
                    </div>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <div className="w-20 h-20 group flex flex-col cursor-pointer justify-between items-center">
                            <span className="group-hover:text-green-500">M</span>
                            <div className="rounded-full group-hover:bg-green-300 text-xs    w-12 h-12 group-hover:text-green-500 border border-gray-8 justify-center items-center flex">14 <br /> Feb</div>
                        </div>
                        <div className="w-20 h-20 group flex flex-col cursor-pointer justify-between items-center">
                            <span className="group-hover:text-green-500">Tu</span>
                            <div className="rounded-full group-hover:bg-green-300 text-xs  w-12 h-12 group-hover:text-green-500 border border-gray-800 justify-center items-center flex">15 <br /> Feb</div>
                        </div>
                        <div className="w-20 h-20 group flex flex-col cursor-pointer justify-between items-center">
                            <span className="group-hover:text-green-500">W</span>
                            <div className="rounded-full group-hover:bg-green-300 text-xs  w-12 h-12 group-hover:text-green-500 border border-gray-800 justify-center items-center flex">16 <br /> Feb</div>
                        </div>
                        <div className="w-20 h-20 group flex flex-col cursor-pointer justify-between items-center">
                            <span className="group-hover:text-green-500">Th</span>
                            <div className="rounded-full group-hover:bg-green-300 text-xs  w-12 h-12 group-hover:text-green-500 border border-gray-800 justify-center items-center flex">17 <br /> Feb</div>
                        </div>
                        <div className="w-20 h-20 group flex flex-col cursor-pointer justify-between items-center">
                            <span className="group-hover:text-green-500">Fr</span>
                            <div className="rounded-full group-hover:bg-green-300 text-xs  w-12 h-12 group-hover:text-green-500 border border-gray-800 justify-center items-center flex">18 <br /> Feb</div>
                        </div>
                        <div className="w-20 h-20 group flex flex-col cursor-pointer justify-between items-center">
                            <span className="group-hover:text-green-500">Sa</span>
                            <div className="rounded-full group-hover:bg-green-300 text-xs  w-12 h-12 group-hover:text-green-500 border border-gray-800 justify-center items-center flex">19 <br /> Feb</div>
                        </div>
                        <div className="w-20 h-20 group flex flex-col cursor-pointer justify-between items-center">
                            <span className="group-hover:text-green-500">Su</span>
                            <div className="rounded-full group-hover:bg-green-300 text-xs  w-12 h-12 group-hover:text-green-500 border border-gray-800 justify-center items-center flex">20 <br /> Feb</div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className="flex items-center mt-3 space-x-8">
                    <div className="overflow-hidden w-96 rounded-sm border flex">
                        <div className="flex-1 py-1 px-4 hover:bg-green-200 cursor-pointer">UPCOMING</div>
                        <div className="flex-1 py-1 px-4 hover:bg-green-200 cursor-pointer">COMPLETED</div>
                    </div>
                    <div className="space-x-4">
                        <select className="px-3 py-2 bg-transparent w-52 focus:outline-none border-gray-300 border">
                            <option>Select Batch</option>
                            <option>Exam 1</option>
                            <option>Exam 2</option>
                            <option>Exam 3</option>
                        </select>
                        <select className="px-3 py-2 bg-transparent w-52 focus:outline-none border-gray-300 border">
                            <option>Moderator Name</option>
                            <option>Exam 1</option>
                            <option>Exam 2</option>
                            <option>Exam 3</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='border mt-3 flex max-w-lg mx-auto'>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="/link1"
                    className={'flex-1 focus:bg-green-300 px-3 py-1 ' + (openTab === 1 && "bg-green-300")}
                    role="tablist">tab1</button>
                <button onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                }}
                    data-toggle="tab"
                    href="/link2"
                    className='flex-1 focus:bg-green-300 px-3 py-1'
                    role="tablist">tab2</button>
                <button onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                }}
                    data-toggle="tab"
                    href="/link3"
                    className={'flex-1 focus:bg-green-300 px-3 py-1 ' + (openTab === 3 && "bg-green-300")}
                    role="tablist">tab3</button>
            </div>

            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                tab1
            </div>
            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                tab2
            </div>
            <div className={"px-3 " + (openTab === 3 ? "block" : "hidden")} id="link3">
                <Data />
            </div>


        </div>
    )
}

export default First