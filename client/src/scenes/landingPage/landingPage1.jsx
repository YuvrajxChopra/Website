// App.js
import React from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Grid,
    Card,
    CardContent,
    CardActions,
    TextField,
    TextareaAutosize,
} from '@mui/material';
import './styles.css';

const posts = [
    { id: 1, content: 'This is an unpopular opinion.', user: 'User1', imageUrl: 'https://placekitten.com/300/200' },
    {
        id: 2,
        content: 'Another controversial post here.',
        user: 'User2',
        imageUrl: 'https://placekitten.com/300/200',
        postImageUrl: 'https://placekitten.com/300/200',
    },
    { id: 3, content: 'What do you think about this idea?', user: 'User3', imageUrl: 'https://placekitten.com/300/200' },
];

const landingPage = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar className="toolbar">
                    <Typography component={Link} to="/" className="site-name" fontWeight="bold" fontSize="clamp(1rem, 2rem, 2.25rem)">
                        whisper.web
                    </Typography>
                    <Button color="inherit" component={Link} to="/auth">
                        Login | Register
                    </Button>
                </Toolbar>
            </AppBar>

            <Container className="main-container">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <header className="header" style={{ backgroundImage: 'url("https://placekitten.com/1600/800")' }}>
                            <Typography variant="h3" component="h1" align="center" gutterBottom>
                                Share Your Whispers
                            </Typography>
                            <Typography variant="h6" component="p" align="center">
                                An anonymous space to express unpopular opinions.
                            </Typography>
                        </header>
                    </Grid>

                    <Grid item xs={12}>
                        <section className="recent-whispers">
                            <Typography variant="h4" component="h2" gutterBottom>
                                Recent Whispers
                            </Typography>
                            <Grid container spacing={3}>
                                {posts.map((post) => (
                                    <Grid item key={post.id} xs={12} sm={6} md={4}>
                                        <Card>
                                            {post.postImageUrl && (
                                                <img
                                                    src={post.postImageUrl}
                                                    alt={`Post ${post.id}`}
                                                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                                />
                                            )}
                                            <CardContent>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {post.content}
                                                </Typography>
                                                <Typography variant="caption" color="textSecondary" component="p">
                                                    - {post.user}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">Like</Button>
                                                <Button size="small">Comment</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </section>
                    </Grid>


                    <Grid item xs={12}>
                        <section className="contact-us">
                            <Typography variant="h4" component="h2" gutterBottom>
                                Contact Us
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <Card className="contact-card">
                                        <CardContent>
                                            <Typography variant="subtitle1" component="p">
                                                Contact Information:
                                            </Typography>
                                            <Typography variant="h6" component="p">
                                                Email: contact@whisper.web
                                            </Typography>
                                            <Typography variant="h6" component="p">
                                                Phone: +1 (555) 123-4567
                                            </Typography>
                                            <Typography variant="h6" component="p">
                                                Address: 123 Whisper Lane, Anonymous City, AW 56789
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Card className="contact-card">
                                        <CardContent>
                                            <form>
                                                <TextField label="Name" fullWidth margin="normal" variant="outlined" />
                                                <TextField label="Email" fullWidth margin="normal" variant="outlined" />
                                                <TextareaAutosize
                                                    minRows={3}
                                                    placeholder="Your message"
                                                    style={{ width: '100%', padding: '10px', marginTop: '10px' }}
                                                />
                                                <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                                                    Send Message
                                                </Button>
                                            </form>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </section>
                    </Grid>
                </Grid>
            </Container>

            <footer className="footer">
                <Typography variant="body2" color="textSecondary" align="center">
                    © {new Date().getFullYear()} whisper.web. All rights reserved.
                </Typography>
            </footer>
        </>
    );
};

export default landingPage;
