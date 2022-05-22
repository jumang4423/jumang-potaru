import React, {useEffect} from 'react';

const InformationBar = (): JSX.Element => {
  const [curPos, setCurPos] = React.useState<number>(0);
  const infotmationText = "black lives matter. jumango is a platform that helps you find the best places to eat and drink in your area. we are currently in beta and we are looking for feedback and suggestions. if you have any questions or suggestions, please contact us!";

  useEffect(() => {

  }, [])

  return (
    <div style={{
      fontSize: `12px`,
      color: `#787878`,
      fontFamily: `Menlo, monospace`,
      width: `100%`,
      height: `20px`,
    }}>
        {infotmationText}
    </div>
  )
}

export default InformationBar
