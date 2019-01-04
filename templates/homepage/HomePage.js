export const HomePage = () => {
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  )
}


// import PropTypes from 'prop-types';
// import dynamic from 'next/dynamic';

// import { HomepageLayout } from '../../features/homepage/HomepageLayout';
// const HomepageHero = dynamic(() => import('../../features/homepage/HomepageHero'));
// const Subscribe = dynamic(() => import('../../features/common/components/magazine/Subscribe'));
// const HomepageTransforming = dynamic(() => import('../../features/homepage/HomepageTransforming'));
// import { TestimonialsComponent } from '../../features/common/components/testimonials/TestimonialsComponent';
// import { TheDailyJournalComponent } from '../../features/common/components/the-daily-journal/TheDailyJournalComponent';

// export const  HomePage = (props) => {

//     const {
//         header,
//         transofrming,
//         testimonials,
//         testimonials_tag,
//         magazine,
//         theDailyJournal
//     } = props;

//     return (
//         <HomepageLayout>
//             <HomepageHero header={header} />
//             <HomepageTransforming transofrming={transofrming} />
//             <TestimonialsComponent testimonials={testimonials} testimonials_tag={testimonials_tag} />
//             <Subscribe magazine={magazine} />
//             <TheDailyJournalComponent theDailyJournal={theDailyJournal} />
//         </HomepageLayout>
//     )
// }

// HomePage.propTypes = {
//     header: PropTypes.object,
//     transofrming: PropTypes.object,
//     testimonials: PropTypes.object,
//     magazine: PropTypes.object,
//     theDailyJournal: PropTypes.object,
//     testimonials_tag: PropTypes.string,
// }

