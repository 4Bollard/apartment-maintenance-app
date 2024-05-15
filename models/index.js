const Tenant= require('./Tenant');
const Apartment= require('./Apartment');
const Manager= require('./Manager');
const Issues= require('./Issues');

Apartment.hasMany(Tenant,{
    foreignKey: 'apt_id'
})

Tenant.belongsTo(Apartment, {
    foreignKey: 'apt_id'
})

Manager.hasMany(Issues, {
    onDelete: 'SET NULL',
})

Tenant.hasMany(Issues, {
    onDelete: 'SET NULL',
})

Apartment.hasMany(Issues, {
    onDelete: 'SET NULL',
})




// Schedule.belongsToMany(Manager, {
//     through: Issues,
//     foreignKey: 'manager_id'
// })

Issues.belongsTo(Tenant, {
    foreignKey: 'tenant_id'
})
Issues.belongsTo(Manager, {
    foreignKey: 'manager_id'
})
Issues.belongsTo(Apartment, {
    foreignKey: 'apt_id'
})


module.exports= {
Tenant,
Apartment,
Manager,
Issues,
}