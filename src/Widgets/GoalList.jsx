import React from 'react'

export default () => <div className="panel goal-container">
    <h2>Goals</h2>

    <ul>
        <li>
            <span class="goal-title">Goal #1</span>
            <progress max="100" value="70"></progress>
        </li>
        <li>
            <span class="goal-title">Goal #2</span>
            <progress max="100" value="30"></progress>
        </li>
    </ul>
</div>