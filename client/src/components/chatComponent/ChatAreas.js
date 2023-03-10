import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import './styles.css'
function ChatAreas(props) {
  return (
    <div class="container1">
        <div class="card1">
            <div class="face face1">
                <div class="content">
                    <div class="icon1">
                        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">_adamdipinto</a>
                    </h3>
                    <p>This is where I network and build my professional protfolio.</p>
                </div>
            </div>
        </div>
        <div class="card1">
            <div class="face face1">
                <div class="content">
                    <div class="icon1">
                        <i class="fa fa-twitter-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a href="https://twitter.com/AdamDipinto" target="_blank">@AdamDipinto</a>
                    </h3>
                    <p>This is where I read news and network with different social groups.</p>
                </div>
            </div>
        </div>
        <div class="card1">
            <div class="face face1">
                <div class="content">
                    <div class="icon1">
                        <i class="fa fa-github-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a href="https://github.com/atom888" target="_blank">atom888</a>
                    </h3>
                    <p>This is where I share code and work on projects.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ChatAreas;