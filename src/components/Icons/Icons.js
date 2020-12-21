import { LinkedinOutlined, GithubOutlined } from "@ant-design/icons";

const social = {
  linkdin: "linkedin",
  github: "github",
};
export default function Icons({ icon, link }) {
  const openLink = () => {
    window.open(link, "_blank");
  };

  if (icon === social.github) {
    return <GithubOutlined onClick={openLink} style={{ fontSize: 30 }} />;
  } else {
    return <LinkedinOutlined onClick={openLink} style={{ fontSize: 30 }} />;
  }
}
