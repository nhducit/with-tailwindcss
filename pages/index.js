import * as React from 'react';

export default function IndexPage() {
  React.useEffect(() => {
    setTimeout(() => {
      fetch('/static/theming.json')
        .then((res) => res.json())
        .then((theme) => {
          const rootElement = document.querySelector(':root');
          rootElement?.style.setProperty('--primary', theme['--primary']);
        });
    }, 2000);
  }, []);
  return (
    <div>
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 text-primary">
          Next.js + Tailwind CSS 2.0
        </h1>
        <h1 className="mt-4">
          The header color is <span style={{ color: 'tomato' }}>`tomato`</span>,
          2 seconds after the page loaded it's color will be changed to
          <span style={{ color: 'darkcyan' }}>`tomato`</span> which is configured in `theming.json` file
        </h1>
        <div className="mt-4">
          `text-primary` css class are using CSS variables, it's value can be
          update via javascript
        </div>
        <div className="whitespace-pre-line">
          {`
              setTimeout(() => {
              fetch('/static/theming.json')
                .then((res) => res.json())
                .then((theme) => {
                  const rootElement = document.querySelector(':root');
                  rootElement?.style.setProperty('--primary', theme['--primary']);
                });
            }, 2000);
          `}
        </div>
      </div>
    </div>
  );
}
