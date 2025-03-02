<<<<<<< HEAD
  import React, { useState } from 'react';

  const ChangeType: React.FC = () => {
    const [type, setType] = useState<string>('Type A');

    const toggleType = () => {
      setType((prevType) => (prevType === 'Type A' ? 'Type B' : 'Type A'));
    };

    return (
      <div>
        <p>Current Type: {type}</p>
        <button onClick={toggleType}>Change Type</button>
      </div>
    );
  };

  export default ChangeType;
=======
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    return <div>Change Type</div>;
}
>>>>>>> origin/task-components
