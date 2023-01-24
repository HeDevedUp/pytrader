import styles from '../styles';

const StartSteps = ({ text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <p className='ml-[10px] flex-1 text-[18px] font-normal leading-[32.4px] text-[#B0B0B0]'>
      {text}
    </p>
  </div>
);

export default StartSteps;
