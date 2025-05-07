import React, { Component } from 'react'
import Avatar from '../avatar/Avatar'
import SkillsMenu from "./SkillsMenu.js"

export default class Skills extends Component {
  render() {
    return (
      <div>
        <Avatar page ="skills"/>
        <SkillsMenu/>
      </div>
    )
  }
}
