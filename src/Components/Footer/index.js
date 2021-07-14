import SimpleReactFooter from "simple-react-footer";

export default function Footer(){
  const description = "Hi! I'm Trieu, a civil engineer turned software engineer. Please navigate through this application to learn more about me.";
  const title = "About";
  const columns = [
    {
        title: "Resources",
        resources: [
            {
                name: "About",
                link: "/about"
            },
            {
                name: "Portfolio",
                link: "/portfolio"
            },
            {
                name: "Contact",
                link: "/contact"
            }
        ]
    }
 ];
 return <SimpleReactFooter 
    description={description} 
    title={title}
    columns={columns}
    linkedin="trieule1"
    facebook="Truly031"
    twitter="trieule50"
    instagram="trieule50"
    youtube="trieule50"
    pinterest="true"
    copyright="Trieu Le"
    iconColor="black"
    backgroundColor="bisque"
    fontColor="black"
    copyrightColor="darkgrey"
 />;
};