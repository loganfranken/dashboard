import React from 'react'

export default ({ goals }) => <div className="panel info-panel goal-panel">
    <h2>Key Metrics</h2>

    <ul className={"goal-list"}>
        {goals.map(({ description, currentPercentage, isComplete }) => <li className={isComplete ? "complete" : ""} key={description}>
            <span className="goal-title">{description}</span>
            <progress max="100" value={currentPercentage}></progress>
        </li>)}
    </ul>
</div>