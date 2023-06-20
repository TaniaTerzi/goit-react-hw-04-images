// import { Dna } from 'react-loader-spinner';
// import css from './Loader.module.css';

// export const Loader = () => (
//     <div className={css.Loader}>
//       <Dna
//         visible={true}
//         height="80"
//         width="80"
//         ariaLabel="dna-loading"
//         wrapperStyle={{}}
//         wrapperClass="dna-wrapper"
//       />
//     </div>
//   );

  import { ThreeDots } from 'react-loader-spinner';
  import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.Spinner}>
      <ThreeDots
        height="125"
        width="125"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};


