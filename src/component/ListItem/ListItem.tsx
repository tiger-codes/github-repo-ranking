import { ReactElement, useEffect, useState } from "react";
import './ListItem.scss';

interface ListItemProps {
    primaryText: string;
    secondaryText: number;
}

const ListItem = ({ primaryText, secondaryText }: ListItemProps): ReactElement => {
    return <div key={primaryText} className="list-item-container">
                <div key="primary" className="primary">{primaryText}</div>
                <div key="secondary" className="secondary">
                    <span className="fa fa-star checked"></span>
                    <span >{secondaryText}</span>
                </div>
           </div>
}

export default ListItem;
