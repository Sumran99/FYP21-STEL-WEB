import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Bus",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add Bus",
        path: "/addbus",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Delete Bus",
        path: "/deletebus",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Update Bus",
        path: "/updatebus",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Show Bus",
        path: "/showbus",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Route",
    path: "/route",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add Route",
        path: "/route/addroute",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Delete Route",
        path: "/route/deleteroute",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Update Route",
        path: "/route/updateroute",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Show Route",
        path: "/route/showroute",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Driver",
    path: "/driver",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add Driver",
        path: "/driver/adddriver",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Delete Driver",
        path: "/driver/deletedriver",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Update Driver",
        path: "/driver/updatedriver",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Show Driver",
        path: "/driver/showdriver",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Statistics",
    path: "/statistics",
    icon: <IoIcons.IoIosPaper />,
  },
];
