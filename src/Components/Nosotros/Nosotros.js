import "./Nosotros.css";
import data from "../../Constants/nosotros";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import imgbackground from "./img/background/fondoimg.jpg";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import { green, blue, common } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Tooltip from "@mui/material/Tooltip";
import javawizardsIcon from "./img/background/javawizardsIcon.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Función que va a retornar las tarjetas con la información en la Página Nosotros. Esta es la función que se va a exportar.
const AboutUs = () => {
  // La función .map() es una función que se utiliza para transformar cada elemento de un array según una función que se proporciona como argumento. En este caso, la función proporcionada como argumento ((item) => <AboutMe {...item} />) toma cada objeto dentro del array data, lo pasa como parametro ((item)) y crea un nuevo componente AboutMe. La sintaxis {...item} se utiliza para pasar cada propiedad del objeto item como una prop al componente AboutMe.
  // La constante aboutme es un array de componentes AboutMe (Componente con los estilos) creados a partir de los objetos dentro del array data.
  const aboutme = data.map((item) => <AboutMe {...item} />);

  // Debido a que será la función AboutUs la que se exportará. Será el return que podremos visualizar en la página Nosotros
  return (
    <Box>
      {/* PRIMER SECCIÓN: Se retorna una primer sección con el titulo "ACERCA DE NOSOTROS" y la imagen del logo, ambos con estilos agregados inline */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: { md: "space-between", xs: "center" },
          textAlign: { xs: "center", md: "space-between" },
          alignItems: "center",
          paddingX: 7,
          paddingY: 2,
          marginY: 3,
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography className="lato" variant="h3" color="#276678">
            ACERCA DE NOSOTROS
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
          }}
        >
          <img
            src={javawizardsIcon}
            alt="JavaWizardsIcon"
            width={207}
            height={60}
          />
        </Grid>
      </Grid>

      {/* SEGUNDA SECCIÓN: Se retorna una segunda sección con las tarjetas guardadas en la constante aboutme y con estilos agregados inline*/}
      {/*Las tarjetas son superficies que muestran contenido y acciones sobre un solo tema.
      Deben ser fáciles de escanear en busca de información relevante y procesable. Los elementos, como el texto y las imágenes, deben colocarse en ellos de manera que indique claramente la jerarquía.*/}
      <Card id="card">
        <Grid container justifyContent="center">{aboutme}</Grid>
      </Card>
    </Box>
  );
};

// Función que recibirá el parametro props mediante la información de cada objeto con "{...item}" (ver constante aboutme en función AboutUs), generando las tarjetas y guardando en la constante aboutme (función AboutUs) el numero de tarjetas según el numero de objetos.
const AboutMe = (props) => {
  return (
    /* ------------------------------- ESTILO GENERAL DE LA TARJETA ------------------------------- */

    <Grid
      item
      xs={12}
      md={12}
      lg={6}
      xl={4}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <item>
        <CardContent
          sx={{
            bgcolor: "#276678",
            m: 2,
            p: 0,
            borderRadius: "16px",
            minWidth: 200,
            maxWidth: 550,
            textAlign: "center",
            color: "#f6f5f5",
          }}
        >
          {/* ------------------------------- IMAGEN DE FONDO (DETRAS DE AVATAR) ------------------------------- */}

          <Grid
            container
            sx={{
              backgroundImage: `url(${imgbackground})`, // Se agrega la imagen imgbackground importada como background para la parte superior de las tarjetas
              p: 6, //Al no tener contenido, se necesita agregar padding para hacer el espacio y se vea la imagen
              position: "relative",
              borderTopRightRadius: "16px",
              borderTopLeftRadius: "16px",
              borderBottom: 1,
            }}
          ></Grid>
          {/* ------------------------------- AVATAR ------------------------------- */}

          <Grid
            container
            sx={{ display: "flex", justifyContent: "center", marginY: -7.5 }}
          >
            <Grid item>
              {/* La etiqueta Avatar le da estilos a una imagen o icono, siendo esta principalmente el circular la imagen y además permitir que se agregue estilo mediante sx al mismo*/}
              <Avatar
                sx={{ border: 2, width: 110, height: 110 }}
                alt={props.name} // Mediante props se accede al valor de la propiedad name de los objetos (Miembros de javawizards)
                src={props.avatar} // Mediante props se accede al valor de la propiedad avatar de los objetos (Miembros de javawizards)
              />
            </Grid>
          </Grid>

          {/* ------------------- SECCIÓN CONTENIDO: NOMBRE, ENLACE A REDES (GitHub, Linkedin, CV), HEADLINE, ABOUTME -------------------- */}

          {/* ------------------------------- NOMBRE ------------------------------- */}

          <Grid container justifyContent="center" sx={{ p: 0, marginTop: 10 }}>
            <Grid item sx={12}>
              <Typography className="lato" sx={{ fontSize: "1.75rem" }}>
                {props.name}
                {/* Mediante props se accede al valor de la propiedad name de los objetos (Miembros de javawizards) */}
              </Typography>
            </Grid>
          </Grid>

          {/* ------------------------------- ICONOS ENLACE A REDES (GitHub, Linkedin, CV) ------------------------------- */}

          <Grid container justifyContent="space-evenly">
            {/* ------------------------------- ENLACE GITHUB ------------------------------- */}
            <Grid item>
              <Link href={props.gitHub} target="_blank">
                {" "}
                {/* Mediante props se accede al enlace de GitHub de cada Miembro de javawizards*/}
                {/* La etiqueta Avatar le da estilos a una imagen o icono, siendo esta principalmente el circular la imagen y además permitir que se agregue estilo mediante sx al mismo*/}
                <Avatar
                  sx={{
                    bgcolor: common[500],
                    marginBottom: 2,
                    marginTop: 1,
                    width: 60,
                    height: 60,
                  }}
                >
                  <GitHubIcon /> {/* Icono importado de material UI */}
                </Avatar>
              </Link>
            </Grid>
            {/* ------------------------------- ENLACE LINKEDIN ------------------------------- */}
            <Grid item>
              <Link href={props.linkedin} target="_blank">
                {/* Mediante props se accede al enlace de LinkedIn de cada Miembro de javawizards*/}
                {/* La etiqueta Avatar le da estilos a una imagen o icono, siendo esta principalmente el circular la imagen y además permitir que se agregue estilo mediante sx al mismo*/}
                <Avatar
                  sx={{
                    bgcolor: blue[500],
                    marginBottom: 2,
                    marginTop: 1,
                    width: 60,
                    height: 60,
                  }}
                >
                  <LinkedInIcon /> {/* Icono importado de material UI */}
                </Avatar>
              </Link>
            </Grid>
            {/* ------------------------------- ENLACE CV ------------------------------- */}
            <Grid item>
              <Link href={props.cv} target="_blank">
                {" "}
                {/* Mediante props se accede al enlace del CV de cada Miembro de javawizards*/}
                {/* La etiqueta Avatar le da estilos a una imagen o icono, siendo esta principalmente el circular la imagen y además permitir que se agregue estilo mediante sx al mismo*/}
                <Avatar
                  sx={{
                    bgcolor: green[500],
                    marginBottom: 2,
                    marginTop: 1,
                    width: 60,
                    height: 60,
                  }}
                >
                  <AssignmentIcon /> {/* Icono importado de material UI */}
                </Avatar>
              </Link>
            </Grid>
          </Grid>

          {/* ------------------------------- HEADLINE ------------------------------- */}

          <Grid container alignItems="center">
            <Grid item xs={12}>
              <Typography
                className="lato" // Se le asigna la clase lato para modificar el estilo mediante CSS externo
                sx={{ mb: 1.5, fontSize: "1.25rem", marginBottom: 3 }}
              >
                {props.headline}
                {/* Mediante props se accede al valor de la propiedad headline de los objetos (Miembros de javawizards) */}
              </Typography>
            </Grid>
          </Grid>
          {/* ------------------------------- ABOUTME  ------------------------------- */}
          <Accordion sx={{ bgcolor: "#276678", color: "#f6f5f5" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container alignItems="center">
                <Grid item xs={12}>
                
                    <Chip className="lato" label="ABOUT ME" color="warning" />
                
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Grid item xs={12}>
                <Typography
                  className="lato" // Se le asigna la clase lato para modificar el estilo mediante CSS externo
                  sx={{
                    textAlign: "justify",
                    paddingX: 5,
                  }}
                >
                  {/* Mediante props se accede al valor de la propiedad aboutme de los objetos (Miembros de javawizards) */}
                  {props.aboutMe}
                </Typography>
              </Grid>
            </AccordionDetails>
          </Accordion>
          {/* ------------------------------- TECHNICAL Y SOFT SKILLS  ------------------------------- */}
          {/* ------------------------------- TECHNICAL SKILLS BACKEND ------------------------------- */}

          <Accordion sx={{ bgcolor: "#276678", color: "#f6f5f5" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container>
                {/* El parametro container indica que Grid es un elemento padre que contiene elementos hijos (Grid con el parametro item), lo que permite controlar su disposición y estilo.  */}
                {/* El parametro item indica que Grid es un elemento hijo por lo que será afectado por la disposición y el estilo del componente padre. En Grid con parametro item también se agrega el tamaño de columnas*/}
                <Grid item xs={12}>
                  {/* Divider es un componente que sirve para separar elementos mediante una linea.*/}
            
                    {/* Chip es un componente que representa una etiqueta. Muestra información compacta. */}
                    <Chip
                      className="lato"
                      label="TECHNICAL SKILLS"
                      color="primary"
                    />
                
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Grid item xs={5}>
                  {/* Mediante props se accede al valor de la propiedad oneTooltip y one del objeto nested techSkills de los objetos (Miembros de javawizards) */}
                  <Tooltip arrow title={props.techSkills.oneTooltip}>
                    <img
                      className="techSkillsImg"
                      src={props.techSkills.one}
                      alt={props.techSkills.oneTooltip}
                    />
                  </Tooltip>
                  {/* Mediante props se accede al valor de la propiedad twoTooltip y two del objeto nested techSkills de los objetos (Miembros de javawizards) */}
                  <Tooltip arrow title={props.techSkills.twoTooltip}>
                    <img
                      className="techSkillsImg"
                      src={props.techSkills.two}
                      alt={props.techSkills.twoTooltip}
                    />
                  </Tooltip>
                  {/* Mediante props se accede al valor de la propiedad threeTooltip y three del objeto nested techSkills de los objetos (Miembros de javawizards) */}
                  <Tooltip arrow title={props.techSkills.threeTooltip}>
                    <img
                      className="techSkillsImg"
                      src={props.techSkills.three}
                      alt={props.techSkills.threeTooltip}
                    />
                  </Tooltip>
                  {/* Mediante props se accede al valor de la propiedad fourTooltip y four del objeto nested techSkills de los objetos (Miembros de javawizards) */}
                  <Tooltip arrow title={props.techSkills.fourTooltip}>
                    <img
                      className="techSkillsImg"
                      src={props.techSkills.four}
                      alt={props.techSkills.fourTooltip}
                    />
                  </Tooltip>
                </Grid>
                {/* ------------------------------- TECHNICAL SKILLS FRONTEND ------------------------------- */}
                {/* El parametro item indica que Grid es un elemento hijo por lo que será afectado por la disposición y el estilo del componente padre. En Grid con parametro item también se agrega el tamaño de columnas*/}
                <Grid item xs={2}>
                  {/* Mediante props se accede al valor de la propiedad fiveTooltip y five del objeto nested techSkills de los objetos (Miembros de javawizards) */}
                  <Tooltip arrow title={props.techSkills.fiveTooltip}>
                    <img
                      className="techSkillsImg"
                      src={props.techSkills.five}
                      alt={props.techSkills.fiveTooltip}
                    />
                  </Tooltip>
                  {/* Mediante props se accede al valor de la propiedad sixTooltip y six del objeto nested techSkills de los objetos (Miembros de javawizards) */}
                  <Tooltip arrow title={props.techSkills.sixTooltip}>
                    <img
                      className="techSkillsImg"
                      src={props.techSkills.six}
                      alt={props.techSkills.sixTooltip}
                    />
                  </Tooltip>
                </Grid>
                {/* ------------------------------- TECHNICAL SKILLS OTHERS ------------------------------- */}
                <Grid item xs={5}>
                  {/* Mediante props se accede al valor de la propiedad sevenTooltip y seven del objeto nested techSkills de los objetos (Miembros de javawizards) */}
                  {/* arrow agrega a los tooltips un pequeño señalador hacia el objeto del que sale */}
                  <Tooltip arrow title={props.techSkills.sevenTooltip}>
                    <img
                      className="techSkillsImg"
                      src={props.techSkills.seven}
                      alt={props.techSkills.sevenTooltip}
                    />
                  </Tooltip>
                  {/* Mediante props se accede al valor de la propiedad eightTooltip y eight del objeto nested techSkills de los objetos (Miembros de javawizards) */}
                  <Tooltip arrow title={props.techSkills.eightTooltip}>
                    <img
                      className="techSkillsImg"
                      src={props.techSkills.eight}
                      alt={props.techSkills.eightTooltip}
                    />
                  </Tooltip>
                  {/* Mediante props se accede al valor de la propiedad nineTooltip y nine del objeto nested techSkills de los objetos (Miembros de javawizards) */}
                  {props.techSkills.nine != null ? (
                    <Tooltip arrow title={props.techSkills.nineTooltip}>
                      <img
                        className="techSkillsImg"
                        src={props.techSkills.nine}
                        alt={props.techSkills.nineTooltip}
                      />
                    </Tooltip>
                  ) : null}
                  {/* Mediante props se accede al valor de la propiedad tenTooltip y ten del objeto nested techSkills de los objetos (Miembros de javawizards) */}
                  {props.techSkills.ten != null ? (
                    <Tooltip arrow title={props.techSkills.tenTooltip}>
                      <img
                        className="techSkillsImg"
                        src={props.techSkills.ten}
                        alt={props.techSkills.tenTooltip}
                      />
                    </Tooltip>
                  ) : null}
                  {/* Mediante props se accede al valor de la propiedad elevenTooltip y eleven del objeto nested techSkills de los objetos (Miembros de javawizards) */}

                  {/* Se hace una condicion ternaria en donde si el dato es null entonces no sé renderiza*/}
                  {props.techSkills.eleven != null ? (
                    <Tooltip arrow title={props.techSkills.elevenTooltip}>
                      <img
                        className="techSkillsImg"
                        src={props.techSkills.eleven}
                        alt={props.techSkills.elevenTooltip}
                      />
                    </Tooltip>
                  ) : null}
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          {/* ------------------------------- SOFT SKILLS  ------------------------------- */}

          <Accordion sx={{ bgcolor: "#276678", color: "#f6f5f5" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container id="softSkills">
                <Grid item xs={12}>
            
                    <Chip className="lato" label="SOFT SKILLS" color="error" />
                
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container id="softSkills">
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    m: 1,
                    flexWrap: "wrap",
                  }}
                >
                  {/* Mediante props se accede al valor de la propiedad oneTooltip y one del objeto nested softSkills de los objetos (Miembros de javawizards) */}
                  <Tooltip arrow title={props.softSkills.oneTooltip}>
                    <img
                      className="softSkillsImg"
                      src={props.softSkills.one}
                      alt={props.softSkills.oneTooltip}
                    />
                  </Tooltip>
                  {/* Mediante props se accede al valor de la propiedad twoTooltip y two del objeto nested softSkills de los objetos (Miembros de javawizards) */}
                  <Tooltip arrow title={props.softSkills.twoTooltip}>
                    <img
                      className="softSkillsImg"
                      src={props.softSkills.two}
                      alt={props.softSkills.twoTooltip}
                    />
                  </Tooltip>
                  {/* Mediante props se accede al valor de la propiedad threeTooltip y three del objeto nested softSkills de los objetos (Miembros de javawizards) */}
                  <Tooltip arrow title={props.softSkills.threeTooltip}>
                    <img
                      className="softSkillsImg"
                      src={props.softSkills.three}
                      alt={props.softSkills.threeTooltip}
                    />
                  </Tooltip>
                  {/* Mediante props se accede al valor de la propiedad fourTooltip y four del objeto nested softSkills de los objetos (Miembros de javawizards) */}
                  <Tooltip arrow title={props.softSkills.fourTooltip}>
                    <img
                      className="softSkillsImg"
                      src={props.softSkills.four}
                      alt={props.softSkills.fourTooltip}
                    />
                  </Tooltip>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </item>
    </Grid>
  );
};

export default AboutUs;
