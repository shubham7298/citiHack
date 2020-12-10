import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Overview from "./views/BlogOverview";

import AddNewPost from "./views/AddNewPost";


import AllSite from "./views/AllSite";
import FlagSite from "./views/FlagSite"
import BlogPosts from "./views/BlogPosts";
import CheckSite from "./views/CheckSite";
import CheckFlagSite from "./views/CheckFlagSite";

import Home  from './views/Home';
import AssetClasses  from './views/AssetClasses';
import  MajorTriggers from './views/MajorTriggers';
import  AlternativeInvestments from './views/AlternativeInvestments';
import Stocks from "./views/assetClass/stocks";
import Bonds from "./views/assetClass/bonds";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/overview" />
  },
  {
    path: "/overview",
    layout: DefaultLayout,
    component: Overview
  },
  {
    path: "/all-site-data",
    layout: DefaultLayout,
    component: AllSite
  },
  {
    path: "/all-flag_site",
    layout: DefaultLayout,
    component: FlagSite
  },
  
  {
    path: "/add-new-site",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/all-site",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path:"/site/:siteId",
    layout: DefaultLayout,
    component: CheckSite
  },
  {
    path:"/flagsite/:siteId",
    layout: DefaultLayout,
    component: CheckFlagSite
  },
  {
    path:"/home",
    layout: DefaultLayout,
    component: Home
  },
  {
    path:"/assestclasses",
    layout: DefaultLayout,
    component: AssetClasses
  },
  {
    path:"/triggers",
    layout: DefaultLayout,
    component: MajorTriggers
  },
  {
    path:"/altInvestment",
    layout: DefaultLayout,
    component: AlternativeInvestments
  },

  {
    path:"/stocks",
    layout: DefaultLayout,
    component: Stocks
  },
  {
    path:"/bonds",
    layout: DefaultLayout,
    component: Bonds
  },

];
