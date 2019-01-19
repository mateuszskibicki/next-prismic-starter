import React from 'react'

export default function _error() {
  return (
    <div>
      error page
    </div>
  )
}


//Custom error page
// import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import Prismic from "prismic-javascript";
// import { PrismicConfig } from "../prismic-config/PrismicAPI";
// import Head from 'next/head'
// import dynamic from 'next/dynamic';

// import { layoutHelper } from "../helpers/LayoutHelpers";
// import { theDailyJournalHelper } from '../helpers/TheDailyJounalHelpers';
// import { MainLayout } from "../features/layout/MainLayout";
// const ErrorPage = dynamic(() => import('../features/error/ErrorPage'));

// class ErrorPageContainer extends Component {
//     static async getInitialProps() {
//         try {
//             const res = await Prismic.api(PrismicConfig.apiEndpoint, {
//                 accessToken: PrismicConfig.apiAccessTokes
//             });
//             const json = await Promise.all([
//                 res.query(Prismic.Predicates.at("document.type", "layout")),
//                 res.query(Prismic.Predicates.at("document.type", "the-daily-journal")),
//             ]);
//             return {
//                 ...layoutHelper(json[0]),
//                 ...theDailyJournalHelper(json[1]),
//             }
//         } catch (err) {
//             return { error: true };
//         }
//     }

//     render() {
//         const {
//             navbar,
//             footer,
//             theDailyJournal
//         } = this.props;

//         return (
//             <MainLayout
//                 navbar={navbar}
//                 footer={footer}
//             >
//                 <Head>
//                     <title>In Touch Networks | Transforming the way businesses recruit and people develop</title>
//                     <meta name='description' content="Upgrade your career & transform the way you connect | Exclusive consultant & non-executive director board-level roles | CPD accredited expert development"/>
//                     <meta name='geo.region' content='ISO:3166-2:GB' />
//                 </Head>
//                 <ErrorPage theDailyJournal={theDailyJournal}/>
//             </MainLayout>
//         )
//     }
// }

// ErrorPageContainer.propTypes = {
//     footer: PropTypes.object,
//     navbar: PropTypes.object,
//     resourcesDefaultPage: PropTypes.object,
//     resourcesDynamicPage: PropTypes.object,
//     articlesList: PropTypes.array,
//     testimonials: PropTypes.object,
//     theDailyJournal: PropTypes.object
// }

// export default ErrorPageContainer;
