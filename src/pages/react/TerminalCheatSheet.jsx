import React from 'react';

function TerminalCheatSheet(){
    return(
        <>
            <div>
                <h1>Terminal Cheat Sheet</h1>
                <h2>Deploying React App locally</h2>
                <p>npm run dev</p>

                <h2>Manual Deployment</h2>
                <p>If you are using the gh-pages package with npm run deploy, and pushing the 
                    build folder content to a gh-pages branch, You must run the build command locally
                    and then deploy those updated files.
                </p>
                <ol>
                    <li>Commit your source code changes to your main branch "git commit", "git push"</li>
                    <li>Run the build command "npm run build" to generate the optimized, production-ready
                        static files in your build folder.
                    </li>
                    <li>Run the deploy command "npm run deploy" to push the content of the build folder to your
                        hosting branch
                    </li>
                </ol>
            </div>
        </>
    );
}

export default TerminalCheatSheet;