# URL-decoder
1. Input: https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/stackinfo?filteringStatus=active&filteringText=&viewNested=true&hideStacks=false&stackId=arn%3Aaws%3Acloudformation%3Aus-east-1%3A123456789%3Astack%2Fmy-first-eks-stack%2F6a07dc80-69c4-11ed-ab2f-0a42d786cad5
    1. The above input will have these details 'arn:aws:cloudformation:us-east-1:123456789:stack/my-first-eks-stack/6a07dc80-69c4-11ed-ab2f-0a42d786cad5' in it, your program should take the input as URL and generate the string  'arn:aws:cloudformation:us-east-1:123456789:stack/my-first-eks-stack/6a07dc80-69c4-11ed-ab2f-0a42d786cad5'
    2. Develop a WebApp that takes input in browser and generates the string
