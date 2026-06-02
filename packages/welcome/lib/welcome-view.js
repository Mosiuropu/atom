/** @babel */
/** @jsx etch.dom **/

import etch from 'etch';

export default class WelcomeView {
  constructor(props) {
    this.props = props;
    etch.initialize(this);

    this.element.addEventListener('click', event => {
      const link = event.target.closest('a');
      if (link && link.dataset.event) {
        this.props.reporterProxy.sendEvent(
          `clicked-welcome-${link.dataset.event}-link`
        );
      }
    });
  }

  didChangeShowOnStartup() {
    atom.config.set('welcome.showOnStartup', this.checked);
  }

  update() {}

  serialize() {
    return {
      deserializer: 'WelcomeView',
      uri: this.props.uri
    };
  }

  render() {
    return (
      <div className="welcome">
        <div className="welcome-container">
          <header className="welcome-header">
            <a href="https://atom.io/">
              <div className="welcome-logo-text">
                <span className="welcome-logo-symbol">⌨</span>
              </div>
              <h1 className="welcome-title">
                Mosiur's Atom Fork
              </h1>
              <p className="welcome-subtitle">
                A hackable text editor — personalized with custom enhancements
              </p>
            </a>
          </header>

          <section className="welcome-panel">
            <h2 className="welcome-panel-heading">Welcome to Mosiur's Atom Fork</h2>
            <p>
              This is a personalized fork of the Atom text editor with custom
              enhancements and configurations. The original editor was sunset by
              GitHub in December 2022, but its spirit lives on.
            </p>
          </section>

          <section className="welcome-panel">
            <p>Resources &amp; documentation</p>
            <ul>
              <li>
                The{' '}
                <a
                  href="https://github.com/Mosiuropu/atom"
                  dataset={{ event: 'fork-repo' }}
                >
                  fork repository
                </a>{' '}
                on GitHub — source code and releases.
              </li>
              <li>
                The{' '}
                <a
                  href="https://www.atom.io/docs"
                  dataset={{ event: 'atom-docs' }}
                >
                  Atom docs
                </a>{' '}
                for Guides and the API reference.
              </li>
              <li>
                The{' '}
                <a
                  href="https://github.com/atom/atom/discussions"
                  dataset={{ event: 'discussions' }}
                >
                  Atom Community
                </a>{' '}
                on GitHub Discussions.
              </li>
            </ul>
          </section>

          <section className="welcome-panel">
            <label>
              <input
                className="input-checkbox"
                type="checkbox"
                checked={atom.config.get('welcome.showOnStartup')}
                onchange={this.didChangeShowOnStartup}
              />
              Show Welcome Guide when opening Atom
            </label>
          </section>

          <footer className="welcome-footer">
            <a
              href="https://github.com/Mosiuropu/atom"
              dataset={{ event: 'fork-gh' }}
            >
              Mosiur's Fork
            </a>{' '}
            <span className="text-subtle">×</span>{' '}
            <a
              className="icon icon-octoface"
              href="https://github.com/"
              dataset={{ event: 'footer-octocat' }}
            />
          </footer>
        </div>
      </div>
    );
  }

  getURI() {
    return this.props.uri;
  }

  getTitle() {
    return 'Welcome';
  }

  isEqual(other) {
    return other instanceof WelcomeView;
  }
}
