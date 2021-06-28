import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../css/ddl.css';
import { Link } from 'react-router-dom';

export class Ddl extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            estado: false,
            title: props.title,
            links:props.links
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        const estado = !this.state.estado;
        this.setState({ estado: estado });
    }
    render() {
        const items = this.state.links;
        return (
            <Dropdown isOpen={this.state.estado} toggle={this.toggle}>
                <DropdownToggle color="#FFFFFF" className="quitarpading"  caret>
                    {this.state.title}
                </DropdownToggle>
                <DropdownMenu>
                    {items.map((item, i) =>
                        <DropdownItem
                            target={item.url!==undefined?"_blank":undefined }
                            href={item.url}
                            header={item.h === undefined ? undefined: true  }
                            divider={item.titulo === undefined ? true : undefined}
                            tag={item.cmp === undefined ? undefined : Link}
                            to={item.cmp}
                            key={i}>
                            {item.titulo}
                          </DropdownItem>
                    )}
                </DropdownMenu>
            </Dropdown>
        );
    }
}
export default Ddl;
