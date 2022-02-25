import React from "react";
import Image from 'next/image';
import {
    Card, CardHeader, CardTitle, CardBody, Label, Input, Row, Col, Table, TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink, CardText, Button
} from "reactstrap"
import { ChevronDown, Copy } from "react-feather"

const Second = () => {
    return (
        <div className="flex flex-col">
            <div className="border flex space-x-8 border-1 p-2 bg-dark text-white">
                <div className=" border-end w-32"> <label className=" fw-bold">Grade</label><label>Up</label>
                    <div><label>Studio</label></div>
                </div>
                <div className=" border-end w-80"><h6>Free live classes</h6>
                    <div><label>Today: Day 930, Total Enrolments:0</label></div>
                </div>
                <div><label>Content doubts</label>
                </div>
            </div>
            <div className="flex">
                <div className="">

                    <div className="flex mt-4 space-x-4">
                        <div>
                            <Image src="/maxresdefault.jpg" height={100} width={170} />
                        </div>
                        <div className="space-y-1">
                            <span className="text-2xl font-bold">UGC NET 2022 | Effective study plan for NET 2022 | Management Saurabh Sir | BYJU'S Exam Prep</span>
                            <div>
                                <span>Saurabh Joneja. Status: <span className="text-red-600">NOT LIVE</span></span>
                            </div>
                            <div><span>Scheduled On 15 Feb 2022 at 19:00:00</span></div>
                            <div className="flex items-center px-2 w-48 py-2 capitalize cursor-pointer rounded-md border border-green-400 text-green-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                <span>copy student link</span>
                            </div>
                        </div>
                    </div>
                    <div className="py-3 px-4">
                        <div className="uppercase my-4 max-w-4xl flex justify-between items-start">
                            <span className="capitalize font-bold text-xl">Stream Details</span>
                            <div className="flex space-x-4">
                                <div className="flex items-center px-4 py-3 cursor-pointer rounded-md border border-green-400 text-green-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    <span>copy url</span>
                                </div>
                                <div className="flex items-center px-4 py-3 cursor-pointer rounded-md border border-green-400 text-green-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    <span>copy stream key</span>
                                </div>
                                <div className="flex items-center px-4 py-3 cursor-pointer rounded-md border border-gray-500 text-gray-700"><span>youtube studio</span></div>
                            </div>
                        </div>
                        <div className="px-4 py-3 rounded-md border border-gray-300 shadow">
                            <div className="flex justify-between items-center space-y-4 flex-col">
                                <span className="text-xl font-medium">Live class will start in</span>
                                <span className="text-4xl font-bold">00 : 23 : 30</span>
                                <span className="text-lg font-medium space-x-8"><span>hrs</span> <span>mins</span> <span>secs</span></span>
                            </div>
                        </div>
                    </div>
                    <Row className=" mt-2">
                        <Col> <Button color="success">SHOW PREVIEW</Button>
                            <label className=" m-1">This Option will work when current account on youtube same as in which video is created</label>
                        </Col>

                    </Row>
                </div>

                <div className="w-1/4 border p-3">Top Chat <ChevronDown size={15} /> </div>

            </div>

        </div>
    )
}

export default Second;