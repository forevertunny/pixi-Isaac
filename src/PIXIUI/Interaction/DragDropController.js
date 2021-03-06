﻿var _items = [];
var DragDropController = {
    add: function ( item, event )
    {
        item._dragDropEventId = event.data.identifier;
        if ( _items.indexOf( item ) === -1 )
        {
            _items.push( item );
            return true;
        }
        return false;
    },
    getItem: function ( object )
    {
        var item = null, index;
        for ( var i = 0; i < _items.length; i++ )
        {
            if ( _items[ i ] === object )
            {
                item = _items[ i ];
                index = i;
                break;
            }
        }

        if ( item !== null )
        {
            _items.splice( index, 1 );
            return item;
        }
        else
        {
            return false;
        }
    },
    getEventItem: function ( event, group )
    {
        var item = null, index, id = event.data.identifier;
        for ( var i = 0; i < _items.length; i++ )
        {
            if ( _items[ i ]._dragDropEventId === id )
            {
                if ( group !== _items[ i ].dragGroup )
                {
                    return false;
                }
                item = _items[ i ];
                index = i;
                break;
            }
        }

        if ( item !== null )
        {
            _items.splice( index, 1 );
            return item;
        }
        else
        {
            return false;
        }
    }
};

export { DragDropController };