import styles from '../styles';

const StartSteps = ({  text }) => (
  <div className={`${styles.flexCenter} flex-row`}>

    <p className="flex-1 ml-[10px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
