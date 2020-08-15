const permissions = [
    {
        group: 'guest',
        permissions: [
            {
                resource: 'shops/*',
                methods: ['GET'],
                action: 'allow',
                view: ['name', 'slug', 'contact', 'description', 'address']
            }
        ]
    },
    {
        group: 'user',
        permissions: [
            {
                resource: 'shops/*',
                methods: ['GET', 'POST', 'PUT', 'DELETE'],
                action: 'allow',
                view: ['name', 'slug', 'contact', 'description', 'address', 'author', 'published']
            }
        ]
    },
    {
        group: 'admin',
        permissions: [
            {
                resource: 'shops/*',
                methods: ['GET', 'POST', 'PUT', 'DELETE'],
                action: 'allow',
                view: ['name', 'slug', 'contact', 'description', 'address', 'author', 'published']
            }
        ]
    }
]

export default permissions
