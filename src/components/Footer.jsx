import React from 'react';
import GitHubButton from 'react-github-btn';

const Footer = () => {
  return (
    <div className="footer">
       <GitHubButton href="https://github.com/luna-moon-1216" data-size="large" aria-label="Follow @luna-moon-1216 on GitHub">Follow @luna-moon-1216</GitHubButton>
       <GitHubButton href="https://github.com/luna-moon-1216/Full-Stack-iSplit" data-icon="octicon-star" data-size="large" aria-label="Star luna-moon-1216/Full-Stack-iSplit on GitHub">Star</GitHubButton>
       <GitHubButton href="https://github.com/luna-moon-1216/Full-Stack-iSplit/fork" data-icon="octicon-repo-forked" data-size="large" aria-label="Fork luna-moon-1216/Full-Stack-iSplit on GitHub">Fork</GitHubButton>
    </div>
  );
};

export default Footer;