This web part uses AADHttp client to display data from the LMS system relevant to the specific logged in user. 

In order for the web part to function properly, it needs to be deployed and approved by the tenant administraitor

reources needed:
1. From the Azure active directory app used to secure the Api: App-Id and Url. Examples: App-Id: 8ff2b780-109c-4db0-9eca-b177a5639152, App-Url: https://pa-lms-dev.cursum.net
2. the complete Endpoint for the specific Api enviroment. Example: https://pa-lms-dev.cursum.net/api/v1/content/me/coursecatalog


Deployment steps:
1. Copy .sppkg file into app catalog. (click deploy on pop-up)
2. While signed-in as tenant admin, open azure ad app address in browser
3. Click consent (Important: mark 'consent on behalf of organization')
4. Go to tenant admin site (New expirience version)
5. Under api-management, approve both requests from the web part.
6. Install app on site level.
7. Configure App