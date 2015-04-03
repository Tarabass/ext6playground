/**
 * This view is an example list of people.
 */
Ext.define('BarFinder.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'BarFinder.store.Personnel'
    ],

    width: 500,
    height: 300,

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name', width: 100 },
        { text: 'Email', dataIndex: 'email', width: 230 },
        { text: 'Phone', dataIndex: 'phone', width: 150 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
