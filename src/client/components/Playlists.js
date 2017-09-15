import React, { Component } from "react"

class Playlists extends Component {
  setActivePlaylist = (owner, id) => {
    this.props.setActivePlaylist(id)
    this.props.onClickPlaylist(owner, id)
  }
  renderPlaylists(playlists) {
    return playlists.map(playlist => {
      let className
      if (playlist.id === this.props.activePlaylist) {
        className = "tooltip active"
      } else {
        className = "tooltip"
      }
      return (
        <li
          className={className}
          key={playlist.id}
          onClick={() => this.setActivePlaylist(playlist.owner.id, playlist.id)}
        >
          <a>
            {playlist.name}
            <span className="tooltiptext">
              {playlist.owner.display_name || playlist.owner.id}
            </span>
          </a>
        </li>
      )
    })
  }

  render() {
    return (
      <aside className="menu">
        <p className="menu-label top-label">
          <span>Mina Spellistor</span>
          <i className="fa fa-plus" aria-hidden="true" />
        </p>
        <ul className="menu-list my-playlists invisible-scrollbar">
          {this.props.playlists ? (
            this.renderPlaylists(this.props.playlists)
          ) : null}
        </ul>
        <p
          className="menu-label"
          style={{ marginTop: "30px", marginBottom: "10px" }}
        >
          Spellistor för dig
        </p>
        <ul className="menu-list featured-playlists">
          {this.props.featuredPlaylists ? (
            this.renderPlaylists(this.props.featuredPlaylists)
          ) : null}
        </ul>
      </aside>
    )
  }
}

export default Playlists
